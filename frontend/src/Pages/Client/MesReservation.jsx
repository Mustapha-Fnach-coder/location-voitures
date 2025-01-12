import  { useState, useEffect } from "react";
import ImageCover from "../../img/commercial.jpeg"; // Chemin de l'image


const MesReservation = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Simuler la récupération de l'historique des réservations d'un client.
    const fetchReservations = () => {
      const mockData = [
        {
          matricule: "1234ABC",
          marque: "Toyota",
          modele: "Corolla",
          annee: 2020,
          type: "Berline",
          prixJour: 50,
          nomAgence: "Agence Agadir",
          dateDebutReservation: "2025-01-01",
          dateFinReservation: "2025-01-07",
          montantTotal: 350,
          image: ImageCover // URL de l'image
        },
        {
          matricule: "5678DEF",
          marque: "Honda",
          modele: "Civic",
          annee: 2019,
          type: "SUV",
          prixJour: 60,
          nomAgence: "Agence Casablanca",
          dateDebutReservation: "2025-02-01",
          dateFinReservation: "2025-02-05",
          montantTotal: 300,
          image: ImageCover // URL de l'image
        },
      ];
      setReservations(mockData);
    };

    fetchReservations();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Historique des réservations</h2>
      <div className="row">
        {reservations.map((reservation, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card shadow-sm">
              <img src={reservation.image} alt={reservation.marque} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{reservation.marque} {reservation.modele}</h5>
                <p className="card-text"><strong>Matricule :</strong> {reservation.matricule}</p>
                <p className="card-text"><strong>Année :</strong> {reservation.annee}</p>
                <p className="card-text"><strong>Type :</strong> {reservation.type}</p>
                <p className="card-text"><strong>Prix par jour :</strong> {reservation.prixJour} €</p>
                <p className="card-text"><strong>Nom Agence :</strong> {reservation.nomAgence}</p>
                <p className="card-text"><strong>Date de début :</strong> {reservation.dateDebutReservation}</p>
                <p className="card-text"><strong>Date de fin :</strong> {reservation.dateFinReservation}</p>
                <p className="card-text"><strong>Montant total :</strong> {reservation.montantTotal} €</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MesReservation;
