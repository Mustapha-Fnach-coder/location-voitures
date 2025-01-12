import { useState } from "react";
import "./Signup.css"; // Créez ce fichier pour les styles

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    NomClient: "",
    PrenomClient: "",
    CinClient: "",
    TelClient: "",
    DateNaiClient: "",
    EmailClient: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "username":
        if (!value.trim()) error = "Le nom d'utilisateur est requis.";
        break;
      case "NomClient":
        if (!value.trim()) error = "Le nom est requis.";
        break;
      case "PrenomClient":
        if (!value.trim()) error = "Le prénom est requis.";
        break;
      case "CinClient":
        if (!/^[A-Za-z0-9]{6,10}$/.test(value))
          error = "CIN invalide (6-10 caractères alphanumériques).";
        break;
      case "TelClient":
        if (!/^\d{10}$/.test(value)) error = "Numéro de téléphone invalide.";
        break;
      case "DateNaiClient":
        const birthDate = new Date(value);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        const dayDifference = today.getDate() - birthDate.getDate();
        if (
          age < 18 ||
          (age === 18 && (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)))
        ) {
          error = "Vous devez avoir au moins 18 ans.";
        }
        break;
      case "EmailClient":
        if (!/\S+@\S+\.\S+/.test(value)) error = "Adresse email invalide.";
        break;
      case "password":
        if (value.length < 6)
          error = "Le mot de passe doit contenir au moins 6 caractères.";
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Valider le champ en temps réel
    setErrors({ ...errors, [name]: validateField(name, value) });

    // Mettre à jour les données
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Valider tous les champs
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    // Vérifiez s'il y a des erreurs
    if (Object.keys(newErrors).length === 0) {
      alert("Inscription réussie !");
    }
  };

  const fieldLabels = {
    username: "Nom d'utilisateur",
    NomClient: "Nom",
    PrenomClient: "Prénom",
    CinClient: "CIN",
    TelClient: "Téléphone",
    DateNaiClient: "Date de naissance",
    EmailClient: "Email",
    password: "Mot de passe",
  };

  return (
    <div className="signup-container">
      <h2>Formulaire d'Inscription</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-container">
          {/* Colonne 1 */}
          <div className="form-column">
            <div className="form-group">
              <label>Nom d'utilisateur</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={`form-input ${errors.username ? "error-input" : ""}`}
              />
              {errors.username && (
                <div className="error-message">{errors.username}</div>
              )}
            </div>
            <div className="form-group">
              <label>Nom</label>
              <input
                type="text"
                name="NomClient"
                value={formData.NomClient}
                onChange={handleChange}
                className={`form-input ${errors.NomClient ? "error-input" : ""}`}
              />
              {errors.NomClient && (
                <div className="error-message">{errors.NomClient}</div>
              )}
            </div>
            <div className="form-group">
              <label>CIN</label>
              <input
                type="text"
                name="CinClient"
                value={formData.CinClient}
                onChange={handleChange}
                className={`form-input ${errors.CinClient ? "error-input" : ""}`}
              />
              {errors.CinClient && (
                <div className="error-message">{errors.CinClient}</div>
              )}
            </div>
          </div>
  
          {/* Colonne 2 */}
          <div className="form-column">
            <div className="form-group">
              <label>Téléphone</label>
              <input
                type="text"
                name="TelClient"
                value={formData.TelClient}
                onChange={handleChange}
                className={`form-input ${errors.TelClient ? "error-input" : ""}`}
              />
              {errors.TelClient && (
                <div className="error-message">{errors.TelClient}</div>
              )}
            </div>
            <div className="form-group">
              <label>Date de naissance</label>
              <input
                type="date"
                name="DateNaiClient"
                value={formData.DateNaiClient}
                onChange={handleChange}
                className={`form-input ${errors.DateNaiClient ? "error-input" : ""}`}
              />
              {errors.DateNaiClient && (
                <div className="error-message">{errors.DateNaiClient}</div>
              )}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="EmailClient"
                value={formData.EmailClient}
                onChange={handleChange}
                className={`form-input ${errors.EmailClient ? "error-input" : ""}`}
              />
              {errors.EmailClient && (
                <div className="error-message">{errors.EmailClient}</div>
              )}
            </div>
          </div>
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
        <button type="submit" className="submit-button">
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default Signup;
