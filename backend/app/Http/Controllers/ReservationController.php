<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Reservation;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function index()
    {
        return response()->json(Reservation::all(), 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'DateDebutReservation' => 'required|date',
            'DateFinReservation' => 'required|date|after_or_equal:DateDebutReservation',
            'MontantTotal' => 'required|numeric',
            'IdClient' => 'required|exists:clients,IdClient',
            'IdEmploye' => 'nullable|exists:employes,IdEmploye',
            'StatutReservation' => 'in:En attente,Acceptée,Refusée,Annulée',
            'StatutPaiement' => 'in:En attente,Payée,Annulée',
        ]);

        $reservation = Reservation::create($validated);

        return response()->json($reservation, 201);
    }

    public function show($id)
    {
        $reservation = Reservation::find($id);

        if (!$reservation) {
            return response()->json(['message' => 'Réservation non trouvée'], 404);
        }

        return response()->json($reservation, 200);
    }

    public function update(Request $request, $id)
    {
        $reservation = Reservation::find($id);

        if (!$reservation) {
            return response()->json(['message' => 'Réservation non trouvée'], 404);
        }

        $validated = $request->validate([
            'DateDebutReservation' => 'required|date',
            'DateFinReservation' => 'required|date|after_or_equal:DateDebutReservation',
            'MontantTotal' => 'required|numeric',
            'IdClient' => 'required|exists:clients,IdClient',
            'IdEmploye' => 'nullable|exists:employes,IdEmploye',
            'StatutReservation' => 'in:En attente,Acceptée,Refusée,Annulée',
            'StatutPaiement' => 'in:En attente,Payée,Annulée',
        ]);

        $reservation->update($validated);

        return response()->json($reservation, 200);
    }

    public function destroy($id)
    {
        $reservation = Reservation::find($id);

        if (!$reservation) {
            return response()->json(['message' => 'Réservation non trouvée'], 404);
        }

        $reservation->delete();

        return response()->json(['message' => 'Réservation supprimée avec succès'], 200);
    }
}
