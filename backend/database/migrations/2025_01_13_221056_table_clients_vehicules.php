<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('client_vehicule', function (Blueprint $table) {
            $table->id('IdClientVehicule');
            $table->unsignedBigInteger('IdClient');
            $table->unsignedBigInteger('IdVehicule');
            $table->unsignedBigInteger('IdReservation');
            $table->timestamps();

            $table->foreign('IdClient')->references('IdClient')->on('clients');
            $table->foreign('IdVehicule')->references('IdVehicule')->on('vehicules');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('client_vehicule');
    }
};
