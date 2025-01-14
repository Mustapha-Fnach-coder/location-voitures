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
        Schema::create('reservations', function (Blueprint $table) {
            $table->id('IdReservation'); // Clé primaire auto-incrémentée
            $table->date('DateDebutReservation'); // Date de début
            $table->date('DateFinReservation'); // Date de fin
            $table->string('StatutReservation', 20)->default('En attente'); // Statut de la réservation

            // Colonnes provenant de la table "contrats"
            $table->date('DateContrat')->nullable(); // Date de création du contrat
            $table->text('DetailsContrat')->nullable(); // Détails du contrat

            // Colonnes provenant de la table "paiements"
            $table->decimal('MontantTotal', 10, 2); // Montant total payé
            $table->string('StatutPaiement', 20)->default('En attente'); // Statut du paiement
            $table->string('MethodePaiement', 50)->nullable(); // Méthode de paiement utilisée

            // Références
            $table->unsignedBigInteger('IdClient'); // Référence vers la table "clients"
            $table->unsignedBigInteger('IdEmploye')->nullable(); // Référence vers la table "employes"
            $table->timestamps();

            // Contraintes et relations
            $table->foreign('IdClient')->references('IdClient')->on('clients')->onDelete('cascade');
            $table->foreign('IdEmploye')->references('IdEmploye')->on('employes')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
