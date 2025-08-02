<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use App\Models\User;
use Illuminate\Http\Request;

class ProductoController extends Controller{
    function index(Request $request){
        $user = $request->user();
        if ($user == null) {
            $user = User::find(1); // Fallback to a default user if not authenticated
        }
        $ventaController = new VentaController();
        if($user->sucursal == 'Ayacucho'){
            $productos = Producto::orderBy('nombre')
                ->with('productoCombo')
                ->where('agencia', $user->sucursal)
                ->get();
            $productoRes = [];
//            $productos->each(function ($producto) use ($ventaController) {
//                error_log('Calculando precio de compra para el producto: ' . $producto->id);
//                $producto->precio_compra = $ventaController->buscarPrecioCompra($producto->id);
//            });
            for($index = 0; $index < count($productos); $index++){
                $producto = $productos[$index];
                error_log('Calculando precio de compra para el producto: ' . $producto->id);
//                $producto->precio_compra = $ventaController->buscarPrecioCompra($producto->id);
//                if($producto->precio_compra > 0){
//                    $productoRes[] = $producto;
//                }
            }
            return $productoRes;
        }
        if($user->sucursal == 'Oquendo'){
            $productos = Producto::orderBy('nombre')
                ->with('productoCombo')
                ->where('agencia', $user->sucursal)
                ->get();
            $productos->each(function ($producto) use ($ventaController) {
                error_log('Calculando precio de compra para el producto: ' . $producto->id);
                $producto->precio_compra = $ventaController->buscarPrecioCompra($producto->id);
            });
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
