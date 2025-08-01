<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Compra extends Model{
    use SoftDeletes;
    protected $fillable = [
        'fecha',
        'total',
        'nombre',
        'anulada',
        'user_id',
        'agencia'
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];
    function user(){
        return $this->belongsTo(User::class);
    }
    function detalles(){
        return $this->hasMany(CompraDetalle::class);
    }

    protected $appends = ['detalleText'];

    function getDetalleTextAttribute(){
        $detalleText = '';
        foreach ($this->detalles as $detalle){
            $detalleText .= $detalle->cantidad.' '.$detalle->producto.' '.$detalle->precio.', ';
        }
        $detalleText = substr($detalleText, 0, -2);
        return $detalleText;
    }
}
