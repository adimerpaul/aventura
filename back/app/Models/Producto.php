<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Producto extends Model{
    //            $table->string('nombre');
    //            $table->double('precio', 8, 2);
    //            $table->integer('stock');
    //            $table->softDeletes();
    use SoftDeletes;
    protected $fillable = [
        'nombre',
        'precio',
        'stock'
    ];
    protected $hidden = ['deleted_at', 'created_at', 'updated_at'];
}
