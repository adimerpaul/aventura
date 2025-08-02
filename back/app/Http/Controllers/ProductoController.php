<?php

namespace App\Http\Controllers;

use App\Models\CompraDetalle;
use App\Models\Producto;
use App\Models\User;
use Illuminate\Http\Request;

class ProductoController extends Controller{
    function index(Request $request){
        $user = $request->user();
        if ($user == null) {
            $user = User::find(1); // Fallback to a default user if not authenticated
        }
//        $ventaController = new VentaController();
        if($user->sucursal == 'Ayacucho'){
            $productos = Producto::orderBy('nombre')
                ->with('productoCombo')
                ->where('agencia', $user->sucursal)
                ->get();
            foreach ($productos as $producto) {
                error_log('Calculando precio de compra para el producto: ' . $producto->id);
//                $producto->precio_compra = $this->buscarPrecioCompra($producto->id);
            }
            return $productos;
        }
        if($user->sucursal == 'Oquendo'){
            $productos = Producto::orderBy('nombre')
                ->with('productoCombo')
                ->where('agencia', $user->sucursal)
                ->get();
//            $productos->each(function ($producto) use ($ventaController) {
//                error_log('Calculando precio de compra para el producto: ' . $producto->id);
//                $producto->precio_compra = $ventaController->buscarPrecioCompra($producto->id);
//            });
            return $productos;
        }

    }
    function buscarPrecioCompra($productoId){
        $compras = CompraDetalle::where('producto_id', $productoId)
            ->orderBy('id', 'desc')
//            ->whereHas('compra', function ($query) {
//                $query->where('anulada', 0);
//            })
            ->first();
        error_log('compras: '.json_encode($compras));
        if ($compras) {
            return $compras->precio;
        } else {
            $producto = Producto::find($productoId);
            return $producto->precio;
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
