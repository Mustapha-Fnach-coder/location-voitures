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
        Schema::create('clients', function (Blueprint $table) {
            $table->id('IdClient');
            $table->string('NomClient');
            $table->string('PrenomClient');
            $table->string('CinClient')->unique();
            $table->string('TelClient');
            $table->date('DateNaiClient');
            $table->string('EmailClient')->unique();
            $table->unsignedBigInteger('IdUser');
            $table->string('StatuClient');
            $table->timestamps();

            $table->foreign('IdUser')->references(columns: 'id')->on('users')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
