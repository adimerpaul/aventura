<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TipoConsola extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'nombre',
        'precio_1',
        'precio_2',
    ];

    protected $hidden = ['deleted_at', 'created_at', 'updated_at'];
}
