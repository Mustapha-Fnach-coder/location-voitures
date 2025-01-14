<?php

namespace App\Http\Controllers;

use App\Models\Vehicule;
use Illuminate\Http\Request;

class VehiculeController extends Controller
{
    /**
     * Affiche une liste des véhicules.
     */
    public function index()
    {
        $vehicules = Vehicule::all();
        return view('vehicules.index', compact('vehicules'));
    }

    /**
     * Affiche le formulaire pour créer un véhicule.
     */
    public function create()
    {
        return view('vehicules.create');
    }

    /**
     * Enregistre un véhicule dans la base de données.
     */
    public function store(Request $request)
    {
        $request->validate([
            'Matricule' => 'required|unique:vehicules',
            'Marque' => 'required',
            'Model' => 'required',
            'Annee' => 'required|integer',
            'Type' => 'required',
            'PrixJour' => 'required|numeric',
            'IdAgence' => 'required|integer',
            'StatuVehicule' => 'required',
        ]);

        Vehicule::create($request->all());
        return redirect()->route('vehicules.index')->with('success', 'Véhicule ajouté avec succès.');
    }

    /**
     * Affiche un véhicule spécifique.
     */
    public function show(Vehicule $vehicule)
    {
        return view('vehicules.show', compact('vehicule'));
    }

    /**
     * Affiche le formulaire pour éditer un véhicule.
     */
    public function edit(Vehicule $vehicule)
    {
        return view('vehicules.edit', compact('vehicule'));
    }

    /**
     * Met à jour un véhicule.
     */
    public function update(Request $request, Vehicule $vehicule)
    {
        $request->validate([
            'Matricule' => 'required|unique:vehicules,Matricule,' . $vehicule->IdVehicule,
            'Marque' => 'required',
            'Model' => 'required',
            'Annee' => 'required|integer',
            'Type' => 'required',
            'PrixJour' => 'required|numeric',
            'IdAgence' => 'required|integer',
            'StatuVehicule' => 'required',
        ]);

        $vehicule->update($request->all());
        return redirect()->route('vehicules.index')->with('success', 'Véhicule mis à jour avec succès.');
    }

    /**
     * Supprime un véhicule.
     */
    public function destroy(Vehicule $vehicule)
    {
        $vehicule->delete();
        return redirect()->route('vehicules.index')->with('success', 'Véhicule supprimé avec succès.');
    }
}
