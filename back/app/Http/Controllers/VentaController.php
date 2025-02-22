<?php

namespace App\Http\Controllers;

use App\Models\Detalle;
use App\Models\Producto;
use App\Models\ProductoCombo;
use App\Models\Venta;
use Illuminate\Http\Request;

class VentaController extends Controller{
    function index(Request $request){
        $fechaInicio = $request->fechaInicio;
        error_log($fechaInicio);
        $fechaFin = $request->fechaFin;
        $ventas = Venta::whereDate('fecha', '>=', $fechaInicio)
            ->whereDate('fecha', '<=', $fechaFin)
            ->orderBy('id', 'desc')
            ->with('detalles','user')
            ->get();
        return $ventas;
    }
    function store(Request $request){
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
            error_log($productoCombo);
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

        return $venta;
    }
    function anular(Request $request, Venta $venta){
        $venta->anulada = true;
        $venta->save();
        return $venta;
    }
}
