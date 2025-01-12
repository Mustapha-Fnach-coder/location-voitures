import { useState } from "react";
import "./Signin.css"; // Créez ce fichier pour les styles

const Signin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (!formData.username || !formData.password) {
        throw new Error("Tous les champs sont obligatoires.");
      }

      // Simulation de validation
      if (formData.username !== "admin" || formData.password !== "1234") {
        throw new Error("Identifiants incorrects.");
      }

      alert("Connexion réussie !");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signin-container">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit} noValidate>
        {error && <div className="error-message-box">{error}</div>}

        <div className="form-group">
          <label>Nom d'utilisateur</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={`form-input ${error ? "error-input" : ""}`}
          />
        </div>

        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`form-input ${error ? "error-input" : ""}`}
          />
        </div>

        <button type="submit" className="submit-button">
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Signin;
