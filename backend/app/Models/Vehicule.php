<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicule extends Model
{
    use HasFactory;

    protected $primaryKey = 'IdVehicule';

    protected $fillable = [
        'Matricule',
        'Marque',
        'Model',
        'Annee',
        'Type',
        'PrixJour',
        'IdAgence',
        'StatuVehicule',
    ];
}
