<?php

namespace App\Http\Controllers;

use App\Models\Reserva;
use Illuminate\Http\Request;

class ReservaController extends Controller{
    function index(Request $request) {
        $fecha = $request->fecha;
        $reservas = Reserva::whereDate('fecha', $fecha)->get();
        $jsonReservas = [];

        foreach ($reservas as $reserva) {
            $data = json_decode($reserva->json, true); // Convertir JSON a array asociativo
            foreach ($data as $key => $value) {
                $jsonReservas[$key] = $value; // Aplanar el array
            }
        }

        return response()->json($jsonReservas);
    }

    function store(Request $request){
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
