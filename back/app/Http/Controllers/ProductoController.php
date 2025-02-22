<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;

class ProductoController extends Controller{
    //    Route::get('/productos', [App\Http\Controllers\ProductoController::class, 'index']);
    //    Route::post('/productos', [App\Http\Controllers\ProductoController::class, 'store']);
    //    Route::put('/productos/{producto}', [App\Http\Controllers\ProductoController::class, 'update']);
    //    Route::delete('/productos/{producto}', [App\Http\Controllers\ProductoController::class, 'destroy']);
    function index(){
        return Producto::all();
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
            return response()->json(['error' => 'No se puede eliminar el producto porque tiene ventas asociadas'], 400);
        }
        $producto->delete();
        return $producto;
    }
}
