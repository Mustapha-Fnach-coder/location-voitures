import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormulaireAjoutVehicule = () => {
    const [formData, setFormData] = useState({
        Matricule: '',
        Marque: '',
        Model: '',
        Annee: '',
        Type: '',
        PrixJour: '',
        IdAgence: '',
        StatuVehicule: '',
        image: null,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            image: e.target.files[0],
        }));
    };

    const validateForm = () => {
        // Vérifier que tous les champs nécessaires sont remplis
        for (const key in formData) {
            if (formData[key] === '' || (key === 'image' && formData[key] === null)) {
                alert(`Le champ ${key} est requis.`);
                return false;
            }
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation des données avant envoi
        if (!validateForm()) return;

        // Confirmation avant d'envoyer les données
        const confirmation = window.confirm('Êtes-vous sûr de vouloir ajouter ce véhicule ?');
        if (!confirmation) {
            return;
        }

        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            const response = await axios.post('http://localhost:8000/api/vehicules', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                alert('Véhicule ajouté avec succès!');
                navigate('/liste');
            } else {
                alert('Une erreur est survenue, veuillez réessayer.');
            }
        } catch (error) {
            console.error(error);
            alert('Erreur lors de l\'ajout du véhicule.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Matricule</label>
                <input
                    type="text"
                    name="Matricule"
                    value={formData.Matricule}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Marque</label>
                <input
                    type="text"
                    name="Marque"
                    value={formData.Marque}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Model</label>
                <input
                    type="text"
                    name="Model"
                    value={formData.Model}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Année</label>
                <input
                    type="text"
                    name="Annee"
                    value={formData.Annee}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Type</label>
                <input
                    type="text"
                    name="Type"
                    value={formData.Type}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Prix par jour</label>
                <input
                    type="number"
                    name="PrixJour"
                    value={formData.PrixJour}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Id Agence</label>
                <input
                    type="text"
                    name="IdAgence"
                    value={formData.IdAgence}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Statut du véhicule</label>
                <input
                    type="text"
                    name="StatuVehicule"
                    value={formData.StatuVehicule}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Image</label>
                <input
                    type="file"
                    name="image"
                    onChange={handleFileChange}
                />
            </div>

            <button type="submit">Ajouter le véhicule</button>
        </form>
    );
};

export default FormulaireAjoutVehicule;
