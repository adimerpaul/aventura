<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Venta extends Model{
    //            $table->dateTime('fecha');
    //            $table->double('total', 8, 2);
    //            $table->integer('nombre');
    //            $table->unsignedBigInteger('user_id');
    //            $table->foreign('user_id')->references('id')->on('users');
    //            $table->softDeletes();
    use SoftDeletes;
    protected $fillable = [
        'fecha',
        'total',
        'nombre',
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
