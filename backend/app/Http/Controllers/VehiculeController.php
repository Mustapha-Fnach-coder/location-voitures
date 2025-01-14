<?php

namespace App\Http\Controllers;

use App\Models\Vehicule;
use Illuminate\Support\Facades\Storage;
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
// Dans la méthode store() de votre contrôleur
public function store(Request $request)
{
    $request->validate([
        'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    ]);

    if ($request->hasFile('image')) {
        // Enregistrer l'image dans le dossier public
        $path = $request->file('image')->store('public/images');

        // Vous pouvez stocker l'URL de l'image pour l'utiliser plus tard
        $imageUrl = Storage::url($path); // URL relative pour accéder à l'image

        // Exemple de sauvegarde dans la base de données
        Vehicule::create([
            'image' => $imageUrl,
            // autres champs...
        ]);

        return back()->with('success', 'Image uploadée avec succès!');
    }

    return back()->with('error', 'Aucune image sélectionnée');
}

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
        'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Validation de l'image
    ]);

    $data = $request->all();

    // Gestion de l'image
    if ($request->hasFile('image')) {
        // Supprimez l'ancienne image si elle existe
        if ($vehicule->image) {
            Storage::disk('public')->delete($vehicule->image);
        }

        $data['image'] = $request->file('image')->store('vehicules', 'public');
    }

    $vehicule->update($data);

    return redirect()->route('vehicules.index')->with('success', 'Véhicule mis à jour avec succès.');
}
}