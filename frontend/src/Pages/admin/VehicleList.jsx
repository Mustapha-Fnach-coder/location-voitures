import React, { useEffect, useState } from 'react';
import axios from 'axios';

function VehicleList() {
    const [vehicles, setVehicles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/vehicules');
                // Vérifier si la réponse contient les données attendues
                if (response.data && Array.isArray(response.data)) {
                    setVehicles(response.data);
                } else {
                    setError('Aucune donnée trouvée.');
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des véhicules:', error);
                setError('Une erreur est survenue lors de la récupération des véhicules.');
            }
        };

        fetchVehicles();
    }, []);

    return (
        <div>
            <h2>Liste des Véhicules</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Afficher un message d'erreur si nécessaire */}
            <table>
                <thead>
                    <tr>
                        <th>Matricule</th>
                        <th>Marque</th>
                        <th>Model</th>
                        <th>Année</th>
                        <th>Type</th>
                        <th>Prix par jour</th>
                        <th>Statut</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.length === 0 ? (
                        <tr>
                            <td colSpan="8">Aucun véhicule trouvé.</td>
                        </tr>
                    ) : (
                        vehicles.map((vehicle) => (
                            <tr key={vehicle.id}>
                                <td>{vehicle.Matricule}</td>
                                <td>{vehicle.Marque}</td>
                                <td>{vehicle.Model}</td>
                                <td>{vehicle.Annee}</td>
                                <td>{vehicle.Type}</td>
                                <td>{vehicle.PrixJour} €</td>
                                <td>{vehicle.StatuVehicule}</td>
                                <td>
                                    {/* Affichage conditionnel de l'image */}
                                    {vehicle.image ? (
                                        <img
                                            src={`http://localhost:8000/storage/${vehicle.image}`}
                                            alt={vehicle.Matricule}
                                            style={{ width: '100px', height: 'auto' }}
                                        />
                                    ) : (
                                        <span>Aucune image</span>
                                    )}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default VehicleList;
