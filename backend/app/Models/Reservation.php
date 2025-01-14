<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = [
        'DateDebutReservation',
        'DateFinReservation',
        'StatutReservation',
        'DateContrat',
        'DetailsContrat',
        'MontantTotal',
        'StatutPaiement',
        'MethodePaiement',
        'IdClient',
        'IdEmploye',
    ];
}
