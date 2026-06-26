<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tipo_consolas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->double('precio_1', 8, 2)->default(0);
            $table->double('precio_2', 8, 2)->default(0);
            $table->softDeletes();
            $table->timestamps();
        });

        DB::table('tipo_consolas')->insert([
            ['nombre' => 'PlayStation 2',   'precio_1' => 0,  'precio_2' => 0,  'created_at' => now(), 'updated_at' => now()],
            ['nombre' => 'PlayStation 3',   'precio_1' => 0,  'precio_2' => 0,  'created_at' => now(), 'updated_at' => now()],
            ['nombre' => 'PlayStation 4',   'precio_1' => 40, 'precio_2' => 45, 'created_at' => now(), 'updated_at' => now()],
            ['nombre' => 'Nintendo Switch', 'precio_1' => 0,  'precio_2' => 0,  'created_at' => now(), 'updated_at' => now()],
        ]);
    }

    public function down(): void
    {
        Schema::dropIfExists('tipo_consolas');
    }
};
