<?php

namespace App\Http\Controllers;

use App\Models\Compra;
use App\Models\CompraDetalle;
use App\Models\Producto;
use App\Models\Venta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CompraController extends Controller{
    public function imprimir(Request $request)
    {
        $user_id = $request->user_id;
        $fechaInicio = $request->fechaInicio . ' 00:00:00';
        $fechaFin = $request->fechaFin . ' 23:59:59';

        $compras = Compra::with('detalles')
            ->whereBetween('fecha', [$fechaInicio, $fechaFin])
            ->when($user_id != '', fn($q) => $q->where('user_id', $user_id))
            ->orderBy('fecha', 'desc')
            ->get();

        return response()->json($compras);
    }
    public function index(Request $request)
    {
        $user = $request->user();
        $userSelected = $request->input('user_id', null);
        $fechaInicio = $request->input('fechaInicio') . ' 00:00:00';
        $fechaFin = $request->input('fechaFin') . ' 23:59:59';

        $query = Compra::whereBetween('fecha', [$fechaInicio, $fechaFin])
            ->with('detalles', 'user')
            ->orderBy('id', 'desc');
        if ($userSelected) {
            $query->where('user_id', $userSelected);
        }
        if ($user->role !== 'Admin') {
            $query->where('user_id', $user->id);
        }
        $gananciasOquendo = Venta::whereBetween('fecha', [$fechaInicio, $fechaFin])
            ->where('agencia', 'Oquendo')
            ->where('anulada', false)
            ->get()
            ->sum(function ($venta) {
                return $venta->detalles->sum(function ($detalle) {
                    return ($detalle->precio - $detalle->precio_compra) * $detalle->cantidad;
                });
            });
        $gananciasAyacucho = Venta::whereBetween('fecha', [$fechaInicio, $fechaFin])
            ->where('agencia', 'Ayacucho')
            ->where('anulada', false)
            ->get()
            ->sum(function ($venta) {
                return $venta->detalles->sum(function ($detalle) {
                    return ($detalle->precio - $detalle->precio_compra) * $detalle->cantidad;
                });
            });

        $res = [
            'compras' => $query->get(),
            'gananciaOquendo' => $gananciasOquendo,
            'ventasOquendo' => Venta::whereBetween('fecha', [$fechaInicio, $fechaFin])
                ->where('agencia', 'Oquendo')
                ->where('anulada', false)
                ->get(),
            'gananciaAyacucho' => $gananciasAyacucho,
            'ventasAyacucho' => Venta::whereBetween('fecha', [$fechaInicio, $fechaFin])
                ->where('agencia', 'Ayacucho')
                ->where('anulada', false)
                ->get(),
        ];

        return response()->json($res);
    }

    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            $user = $request->user();

            $compra = new Compra([
                'fecha' => now(),
                'total' => 0,
                'nombre' => $request->nombre,
                'user_id' => $user->id,
                'agencia' => $user->sucursal
            ]);
            $compra->save();

            $total = 0;
            $detalles = [];

            foreach ($request->productos as $producto) {
                $productoModel = Producto::find($producto['id']);
                $productoModel->stock += $producto['cantidadVenta'];
                $productoModel->save();

                $detalles[] = [
                    'cantidad' => $producto['cantidadVenta'],
                    'producto' => $producto['nombre'],
                    'precio' => $producto['precioVenta'],
                    'producto_id' => $producto['id'],
                    'compra_id' => $compra->id,
                    'user_id' => $user->id,
                    'created_at' => now(),
                    'updated_at' => now()
                ];

                $total += $producto['cantidadVenta'] * $producto['precioVenta'];
            }

            // Inserción en lote
            CompraDetalle::insert($detalles);

            // Redondear al siguiente centavo superior
            $compra->total = ceil($total * 100) / 100;
            $compra->save();

            DB::commit();
            return response()->json($compra);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function anular(Compra $compra)
    {
        $compra->anulada = true;
        $compra->save();

        foreach ($compra->detalles as $detalle) {
            $producto = Producto::find($detalle->producto_id);
            $producto->stock -= $detalle->cantidad;
            $producto->save();
        }

        return $compra;
    }
}
