<?php

namespace App\Http\Controllers;

use App\Models\Caja;
use Illuminate\Http\Request;
use function Pest\Laravel\json;

class CajaController extends Controller{
    function store(Request $request){


        $hoy = date('Y-m-d');
        $montoReal = $request->monto_final - $request->monto_inicial;
        $user = $request->user();



        $ventasSum = $user->ventas()
            ->whereDate('fecha', $hoy)
            ->where('anulada', 0)
            ->sum('total');

        $reservasSum = $user->reservas()
            ->whereDate('fecha', $hoy)
            ->whereRaw('(estado = "Finalizado" or estado = "Confirmado")')
            ->sum('total');

        $montoRealVentas = $ventasSum + $reservasSum;

        $verificar = Caja::whereDate('fecha_cierre', $hoy)->where('user_id', $user->id)->first();
        if($verificar){
//            error_log(json_encode($verificar));
            $verificar->monto_inicial = $request->monto_inicial;
            $verificar->monto_final = $request->monto_final;
            $verificar->observacion = $request->observacion;
            $verificar->monto_real = $montoReal;
            $verificar->monto_diferencia = $montoReal - $montoRealVentas;
            $verificar->save();
            return "Caja actualizada";
        }
        $caja = new Caja();
        $caja->fecha_cierre = date('Y-m-d H:i:s');
        $caja->monto_inicial = $request->monto_inicial;
        $caja->monto_final = $request->monto_final;
        $caja->monto_real = $montoReal;
        $caja->monto_diferencia = $montoReal - $montoRealVentas;
        $caja->observacion = $request->observacion;
        $caja->user_id = $user->id;
        $caja->save();
        return "Caja guardada";
    }
}
