<?php

namespace App\Http\Controllers;

use App\Models\TipoConsola;
use Illuminate\Http\Request;

class TipoConsolaController extends Controller
{
    function index()
    {
        return TipoConsola::orderBy('nombre')->get();
    }

    function store(Request $request)
    {
        $tipoConsola = new TipoConsola();
        $tipoConsola->nombre = $request->nombre;
        $tipoConsola->precio_1 = $request->precio_1;
        $tipoConsola->precio_2 = $request->precio_2;
        $tipoConsola->save();
        return $tipoConsola;
    }

    function update(Request $request, TipoConsola $tipoConsola)
    {
        $tipoConsola->nombre = $request->nombre;
        $tipoConsola->precio_1 = $request->precio_1;
        $tipoConsola->precio_2 = $request->precio_2;
        $tipoConsola->save();
        return $tipoConsola;
    }

    function destroy(TipoConsola $tipoConsola)
    {
        $tipoConsola->delete();
        return $tipoConsola;
    }
}
