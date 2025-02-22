<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Producto extends Model{
    use SoftDeletes;
    protected $fillable = [
        'nombre',
        'precio',
        'stock'
    ];
    protected $hidden = ['deleted_at', 'created_at', 'updated_at'];
    function ventas(){
        return $this->hasMany(Detalle::class);
    }
    function productoCombo(){
        return $this->belongsTo(ProductoCombo::class);
    }
}
