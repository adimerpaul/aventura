<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;

class ProductoController extends Controller{
    function index(Request $request){
        $user = $request->user();
        if($user->sucursal == 'Ayacucho'){
            $productos = Producto::orderBy('nombre')
                ->with('productoCombo')
                ->where('agencia', $user->sucursal)
                ->get();
            $ventaController = new VentaController();
//            $productos->each(function ($producto) {
//                $producto->precio_compra =  $ventaController->calcularPrecioCompra($producto);
//            });
            $productos->each(function ($producto) use ($ventaController) {
                $producto->precio_compra = $ventaController->buscarPrecioCompra($producto->id);
            });
            return $productos;
        }
        if($user->sucursal == 'Oquendo'){
            $productos = Producto::orderBy('nombre')
                ->with('productoCombo')
                ->where('agencia', $user->sucursal)
                ->get();
            return $productos;
        }

    }
    function store(Request $request){
        $producto = new Producto();
        $producto->nombre = $request->nombre;
        $producto->precio = $request->precio;
        $producto->stock = $request->stock;
        $producto->save();
        return $producto;
    }
    function update(Request $request, Producto $producto){
        $producto->nombre = $request->nombre;
        $producto->precio = $request->precio;
        $producto->stock = $request->stock;
        $producto->save();
        return $producto;
    }
    function destroy(Producto $producto){
        $count = $producto->ventas()->count();
        if($count > 0){
            return response()->json(['message' => 'No se puede eliminar el producto porque tiene ventas asociadas'], 400);
        }
        $producto->delete();
        return $producto;
    }
}
