import { useState } from "react";
import "./Signup.css"; // Fichier CSS à créer pour les styles
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    UserName: "",
    password: "",
    password_confirmation: "", // Nouveau champ pour confirmation du mot de passe
  });

  const [errors, setErrors] = useState({});

  // Gestion des changements dans les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validation en direct
    const error = validateField(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  // Validation d'un champ
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "UserName":
        if (!value.trim()) {
          error = "Le nom d'utilisateur est requis.";
        }
        break;

      case "password":
        if (value.length < 6) {
          error = "Le mot de passe doit contenir au moins 6 caractères.";
        }
        break;

      case "password_confirmation":
        if (value !== formData.password) {
          error = "Les mots de passe ne correspondent pas.";
        }
        break;

      default:
        break;
    }

    return error;
  };

  // Validation globale des champs avant soumission
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retourne true si aucun erreur
  };

  // Gestion de la soumission du formulaire
  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    console.log("Données envoyées :", formData);
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        UserName: formData.UserName,
        password: formData.password,
        password_confirmation: formData.password_confirmation, // Ajoutez le champ de confirmation du mot de passe
      });

      Swal.fire({
        icon: "success",
        title: "Inscription réussie !",
        text: "Votre compte a été créé avec succès.",
      });

      navigate("/login"); // Redirection après l'inscription
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Échec de l'inscription",
        text: error.response?.data.message || "Une erreur est survenue.",
      });
    }
  };

  return (
    <div className="signup-container">
      <h2>Formulaire d'Inscription</h2>
      <form onSubmit={handleRegister} noValidate>
        {/* Champ Nom d'utilisateur */}
        <div className="form-group">
          <label>Nom d'utilisateur</label>
          <input
            type="text"
            name="UserName"
            value={formData.UserName}
            onChange={handleChange}
            className={`form-input ${errors.UserName ? "error-input" : ""}`}
          />
          {errors.UserName && (
            <div className="error-message">{errors.UserName}</div>
          )}
        </div>

        {/* Champ Mot de passe */}
        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`form-input ${errors.password ? "error-input" : ""}`}
          />
          {errors.password && (
            <div className="error-message">{errors.password}</div>
          )}
        </div>

        {/* Champ Confirmation de mot de passe */}
        <div className="form-group">
          <label>Confirmez le mot de passe</label>
          <input
            type="password"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
            className={`form-input ${
              errors.password_confirmation ? "error-input" : ""
            }`}
          />
          {errors.password_confirmation && (
            <div className="error-message">{errors.password_confirmation}</div>
          )}
        </div>

        {/* Bouton de soumission */}
        <button type="submit" className="submit-button">
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default Signup;
