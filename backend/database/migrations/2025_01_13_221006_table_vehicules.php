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
        Schema::create('vehicules', function (Blueprint $table) {
            $table->id('IdVehicule');
            $table->string('Matricule')->unique();
            $table->string('Marque');
            $table->string('image');
            $table->string('Model');
            $table->year('Annee');
            $table->string('Type');
            $table->decimal('PrixJour', 8, 2);
            $table->unsignedBigInteger('IdAgence');
            $table->unsignedBigInteger('IdReservation');
            $table->string('StatuVehicule');
            $table->timestamps();

            $table->foreign('IdAgence')->references('IdAgence')->on('agences');
            $table->foreign('IdReservation')->references('IdReservation')->on('reservations');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicules');
    }
};
