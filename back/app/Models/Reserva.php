<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Reserva extends Model{
    use SoftDeletes;
    protected $fillable = [
        'nombre',
        'numero_personas',
        'observaciones',
        'estado',
        'json',
        'sala',
        'motivo_cancelacion',
        'total',
        'adelanto',
        'tiempo',
        'horario',
        'fecha',
        'fecha_confirmacion',
        'fecha_cancelacion',
        'user_id',
        'user_cancelado_id'
    ];
    function user(){
        return $this->belongsTo(User::class);
    }
    function user_cancelado(){
        return $this->belongsTo(User::class);
    }
//$table->enum('estado', ['Reservado', 'Cancelado', 'Finalizado'])->default('Reservado');
    protected $appends = ['color'];
    function getColorAttribute(){
        if($this->estado == 'Reservado'){
            return 'yellow';
        }
        if($this->estado == 'Cancelado'){
            return 'gray';
        }
        if($this->estado == 'Finalizado'){
            return 'red';
        }
    }
    protected $hidden = ['deleted_at', 'created_at', 'updated_at'];
}
