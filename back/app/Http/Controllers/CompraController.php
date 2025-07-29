<?php

namespace App\Http\Controllers;

use App\Models\Compra;
use App\Models\CompraDetalle;
use App\Models\Producto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CompraController extends Controller{
    public function index(Request $request)
    {
        $user = $request->user();
        $fechaInicio = $request->input('fechaInicio') . ' 00:00:00';
        $fechaFin = $request->input('fechaFin') . ' 23:59:59';

        $query = Compra::whereBetween('fecha', [$fechaInicio, $fechaFin])
            ->with('detalles', 'user')
            ->orderBy('id', 'desc');

        if ($user->role !== 'Admin') {
            $query->where('user_id', $user->id);
        }

        return $query->get();
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

            foreach ($request->productos as $producto) {
                $productoModel = Producto::find($producto['id']);
                $productoModel->stock += $producto['cantidadVenta'];
                $productoModel->save();

                CompraDetalle::create([
                    'cantidad' => $producto['cantidadVenta'],
                    'producto' => $producto['nombre'],
                    'precio' => $producto['precioVenta'],
                    'producto_id' => $producto['id'],
                    'compra_id' => $compra->id,
                    'user_id' => $user->id,
                ]);

                $total += $producto['cantidadVenta'] * $producto['precioVenta'];
            }

            $compra->total = $total;
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
