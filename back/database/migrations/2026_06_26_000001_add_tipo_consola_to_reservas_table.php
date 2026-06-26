<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('reservas', function (Blueprint $table) {
            $table->unsignedBigInteger('tipo_consola_id')->nullable()->after('agencia');
            $table->foreign('tipo_consola_id')->references('id')->on('tipo_consolas');
        });
    }

    public function down(): void
    {
        Schema::table('reservas', function (Blueprint $table) {
            $table->dropForeign(['tipo_consola_id']);
            $table->dropColumn('tipo_consola_id');
        });
    }
};
