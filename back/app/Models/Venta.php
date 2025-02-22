<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Venta extends Model{
    use SoftDeletes;
    protected $fillable = [
        'fecha',
        'total',
        'nombre',
        'anulada',
        'user_id'
    ];
    protected $hidden = ['deleted_at', 'created_at', 'updated_at'];
    function detalles(){
        return $this->hasMany(Detalle::class);
    }
    function user(){
        return $this->belongsTo(User::class);
    }
}
