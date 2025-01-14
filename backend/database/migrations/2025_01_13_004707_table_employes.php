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
        Schema::create('employes', function (Blueprint $table) {
            $table->id('IdEmploye');
            $table->string('NomEmploye');
            $table->string('PrenomEmploye');
            $table->string('EmailEmploye')->unique();
            $table->string('PostEmploye');
            $table->unsignedBigInteger('IdUser');
            $table->unsignedBigInteger('IdAgence');
            $table->unsignedBigInteger('IdPoste');
            $table->timestamps();

            $table->foreign('IdUser')->references('IdUser')->on('users');
            $table->foreign('IdAgence')->references('IdAgence')->on('agences');
            $table->foreign('IdPoste')->references('IdPoste')->on('postes');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employes');
    }
};
