<?php

namespace App\Http\Controllers;

use App\Models\Reserva;
use Illuminate\Http\Request;

class ReservaController extends Controller{
    function confirmar(Request $request){
        $reserva = Reserva::find($request->id);
        $reserva->estado = 'Finalizado';
        $reserva->fecha_confirmacion = date('Y-m-d H:i:s');
        $reserva->save();
        return response()->json($reserva);
    }
    function anular(Request $request){
        $reserva = Reserva::find($request->id);
        $reserva->estado = 'Cancelado';
        $reserva->motivo_cancelacion = $request->motivo;
        $reserva->user_cancelado_id = $request->user()->id;
        $reserva->fecha_cancelacion = date('Y-m-d H:i:s');
        $reserva->save();
        return response()->json($reserva);
    }
    function reservasAll(Request $request){
        $fechaInicio = $request->fechaInicio;
        $fechaFin = $request->fechaFin;
        $reservas = Reserva::whereBetween('fecha', [$fechaInicio, $fechaFin])
//            ->whereRaw('(estado = "Reservado" OR estado = "Finalizado")')
            ->orderBy('id', 'desc')
            ->with('user', 'user_cancelado')
            ->get();
        return response()->json($reservas);
    }
    function index(Request $request) {
        $fecha = $request->fecha;
        $reservas = Reserva::whereDate('fecha', $fecha)
            ->whereRaw('(estado = "Reservado" OR estado = "Finalizado")')
            ->get();
        $jsonReservas = [];

        foreach ($reservas as $reserva) {
            $data = json_decode($reserva->json, true); // Convertir JSON a array asociativo
            foreach ($data as $key => $value) {
                $jsonReservas[$key] = [
                    'nombre' => $reserva->nombre,
                    'color' => $reserva->color,
                    'fecha_confirmacion' => $reserva->fecha_confirmacion,
                ];
            }
        }

        return response()->json($jsonReservas);
    }

    function store(Request $request) {
        $reservasResponse = $this->index($request);
        $reservas = $reservasResponse->getData(true);

        $data = json_decode($request->json, true);

        foreach ($data as $key => $value) {
            if (isset($reservas[$key])) {
                return response()->json(['message' => 'Ya existe una reserva en este horario'], 400);
            }
        }

        // Guardar la nueva reserva
        $user = $request->user();
        $reserva = new Reserva();
        $reserva->nombre = $request->nombre;
        $reserva->numero_personas = $request->numero_personas;
        $reserva->observaciones = $request->observaciones;
        $reserva->estado = 'Reservado';
        $reserva->json = $request->json;
        $reserva->sala = $request->sala;
        $reserva->total = $request->total;
        $reserva->adelanto = $request->adelanto;
        $reserva->tiempo = $request->tiempo;
        $reserva->horario = $request->horario;
        $reserva->fecha = $request->fecha;
        $reserva->user_id = $user->id;
        $reserva->save();

        return response()->json($reserva);
    }

}
