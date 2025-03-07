<?php

namespace App\Http\Controllers;

use App\Models\Caja;
use App\Models\Detalle;
use App\Models\Producto;
use App\Models\ProductoCombo;
use App\Models\Reserva;
use App\Models\Venta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VentaController extends Controller{
    function imprimir(Request $request){
        //    proxy.$axios.post("/ventas/imprimir", {
//    user_id: user.value,
//    fechaInicio: fechaInicio.value,
//    fechaFin: fechaFin.value,
//    reporte: reporte.value
//  }).then((res) => {
//        console.log(res.data);
//    });
        $user_id = $request->user_id;
        $fechaInicio = $request->fechaInicio;
        $fechaFin = $request->fechaFin;
        $reporte = $request->reporte;
        if ($reporte == 'CAJA'){
            $ventasSum = Venta::whereDate('fecha', '>=', $fechaInicio)
                ->whereDate('fecha', '<=', $fechaFin)
                ->where('user_id', $user_id)
                ->where('anulada', 0)
                ->sum('total');
            $reservasSumAdelanto = Reserva::whereDate('fecha', '>=', $fechaInicio)
                ->whereDate('fecha', '<=', $fechaFin)
                ->where('user_id', $user_id)
                ->whereRaw("(estado = 'Finalizado' OR estado = 'Reservado')")
                ->sum('adelanto');
            error_log('reservasSumAdelanto: '.$reservasSumAdelanto);
            $reservasSumSaldo = Reserva::whereDate('fecha', '>=', $fechaInicio)
                ->whereDate('fecha', '<=', $fechaFin)
                ->where('user_confirmado_id', $user_id)
                ->whereRaw('(estado = "Finalizado" OR estado = "Reservado")')
                ->sum('saldo');
            error_log('reservasSumSaldo: '.$reservasSumSaldo);
            $cajas = Caja::whereDate('fecha_cierre', '>=', $fechaInicio)
                ->whereDate('fecha_cierre', '<=', $fechaFin)
                ->where('user_id', $user_id)
                ->get();
            $reservasSum = $reservasSumAdelanto + $reservasSumSaldo;
            return response()->json(['ventas' => $ventasSum, 'reservas' => $reservasSum, 'cajas' => $cajas]);
        }else if ($reporte == 'PRODUCTOS'){

            $productos = Producto::join('detalles', 'productos.id', '=', 'detalles.producto_id')
                ->join('ventas', 'detalles.venta_id', '=', 'ventas.id')
                ->whereDate('ventas.fecha', '>=', $fechaInicio)
                ->whereDate('ventas.fecha', '<=', $fechaFin)
                ->where('ventas.user_id', $user_id)
                ->where('ventas.anulada', 0)
                ->select('productos.id','productos.nombre', 'productos.precio', DB::raw('SUM(detalles.cantidad) as cantidad_total'))
                ->groupBy('productos.id','productos.nombre', 'productos.precio')
                ->get();

            $productosComboRes = [];
            for ($i = 0; $i < count($productos); $i++){
                $productoCombo = ProductoCombo::where('producto_padre_id', $productos[$i]->id)->get();
                if(count($productoCombo) > 0){
                    foreach ($productoCombo as $productoHijo){
                        $productoHijoFind = Producto::find($productoHijo->producto_hijo_id);
                        $productosComboRes[] = [
                            'id' => $productoHijoFind->id,
                            'nombre' => $productoHijoFind->nombre.' ('.$productos[$i]->nombre.')',
                            'precio' => $productos[$i]->precio,
                            'cantidad_total' => $productos[$i]->cantidad_total * $productoHijo->cantidad
                        ];
                    }
                }else{
                    $productosComboRes[] = $productos[$i];
                }
            }

            return [
                'productos' => $productos,
                'productosCombo' => $productosComboRes
            ];
        }else if ($reporte == 'SALA'){
//            $ventas = Reserva::whereDate('fecha', '>=', $fechaInicio)
//                ->whereDate('fecha', '<=', $fechaFin)
//                ->where('user_id', $user_id)
//                ->whereRaw("(estado = 'Finalizado' OR estado = 'Reservado')")
//                ->get();
//            return $ventas;
            $reservasAdelanto = Reserva::whereDate('fecha', '>=', $fechaInicio)
                ->whereDate('fecha', '<=', $fechaFin)
                ->where('user_id', $user_id)
                ->whereRaw("(estado = 'Finalizado' OR estado = 'Reservado')")
                ->get();
            error_log(json_encode($reservasAdelanto));
            $reservasSaldo = Reserva::whereDate('fecha', '>=', $fechaInicio)
                ->whereDate('fecha', '<=', $fechaFin)
                ->where('user_confirmado_id', $user_id)
                ->whereRaw('(estado = "Finalizado" OR estado = "Reservado")')
                ->get();
            error_log(json_encode($reservasSaldo));

//            agrupar array de reservas
            $reservasTotal = [];
            foreach ($reservasAdelanto as $reserva){
                $reservasTotal[] = [
                    'nombre' => $reserva['nombre'],
                    'sala' => $reserva['sala'],
                    'horario' => $reserva['horario'],
                    'estado' => $reserva['estado'],
                    'total' => $reserva['adelanto'],
                ];
            }
            foreach ($reservasSaldo as $reserva){
                $reservasTotal[] = [
                    'nombre' => $reserva['nombre'],
                    'sala' => $reserva['sala'],
                    'horario' => $reserva['horario'],
                    'estado' => $reserva['estado'],
                    'total' => $reserva['saldo'],
                ];
            }
            return $reservasTotal;
        }
    }
    function index(Request $request){

        $user = $request->user();


        $fechaInicio = $request->fechaInicio;
//        error_log($fechaInicio);
        $fechaFin = $request->fechaFin;

        if ($user->rol == 'Admin'){
            $ventas = Venta::whereDate('fecha', '>=', $fechaInicio)
                ->whereDate('fecha', '<=', $fechaFin)
                ->orderBy('id', 'desc')
                ->with('detalles','user')
                ->get();
            return $ventas;
        }else{
            $ventas = Venta::whereDate('fecha', '>=', $fechaInicio)
                ->whereDate('fecha', '<=', $fechaFin)
                ->where('user_id', $user->id)
                ->orderBy('id', 'desc')
                ->with('detalles','user')
                ->get();
        }
        return $ventas;
    }
    function store(Request $request){
        $hoy = date('Y-m-d');
        $user = $request->user();

        $verificar = Caja::whereDate('fecha_cierre', $hoy)->where('user_id', $user->id)->first();
        if($verificar){
            return response()->json(['message' => 'Ya se ha cerrado la caja de hoy'], 400);
        }
        DB::beginTransaction();
        try {
            $venta = new Venta();
            $venta->fecha = date('Y-m-d H:i:s');
            $venta->total = 0;
            $venta->nombre = $request->nombre;
            $venta->user_id = $request->user()->id;
            $venta->save();
            $productos = $request->productos;

            $total = 0;
            foreach ($productos as $producto){
                $productoCombo = ProductoCombo::where('producto_padre_id', $producto['id'])->get();
                error_log(json_encode($productoCombo));
                if(count($productoCombo) > 0){
                    foreach ($productoCombo as $productoHijo){
                        $productoHijoFind = Producto::find($productoHijo->producto_hijo_id);
                        $productoHijoFind->stock -= $producto['cantidadVenta'] * $productoHijo->cantidad;
                        $productoHijoFind->save();
                    }
                }else{
                    $productoFind = Producto::find($producto['id']);
                    $productoFind->stock -= $producto['cantidadVenta'];
                    $productoFind->save();
                }
                error_log(json_encode($producto));
                $detalle = new Detalle();
                $detalle->cantidad = $producto['cantidadVenta'];
                $detalle->producto = $producto['nombre'];
                $detalle->precio = $producto['precioVenta'];
                $detalle->producto_id = $producto['id'];
                $detalle->venta_id = $venta->id;
                $detalle->user_id = $request->user()->id;
                $detalle->save();

                $total += $producto['cantidadVenta'] * $producto['precioVenta'];
            }
            $venta->total = $total;
            $venta->save();
            DB::commit();
            return $venta;
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    function anular(Request $request, Venta $venta){
        $venta->anulada = true;
        $venta->save();

        $detalles = Detalle::where('venta_id', $venta->id)->get();
        foreach ($detalles as $producto){
            $productoCombo = ProductoCombo::where('producto_padre_id', $producto['id'])->get();
            if(count($productoCombo) > 0){
                foreach ($productoCombo as $productoHijo){
                    $productoHijoFind = Producto::find($productoHijo->producto_hijo_id);
                    $productoHijoFind->stock += $producto['cantidad'] * $productoHijo->cantidad;
                    $productoHijoFind->save();
                }
            }else{
                $productoFind = Producto::find($producto['producto_id']);
                $productoFind->stock += $producto['cantidad'];
                $productoFind->save();
            }
        }

        return $venta;
    }
}
