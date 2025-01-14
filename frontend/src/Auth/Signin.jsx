import { useState } from "react";
import "./Signin.css"; // Créez ce fichier pour les styles
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    UserName: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // Validation des champs
    if (!formData.UserName || !formData.password) {
      setError("Nom d'utilisateur et mot de passe requis.");
      return;
    }
    console.log("Données envoyées :", formData);
    try {
      // Requête vers l'API
      const response = await axios.post("http://127.0.0.1:8000/api/login", formData);
  console.log("Réponse API :", response);

  // Stockage des données dans les cookies
  Cookies.set("token", response.data.token, { secure: true, sameSite: "Strict" });
  Cookies.set("role", response.data.user.type, { secure: true, sameSite: "Strict" });
  Cookies.set("user", JSON.stringify(response.data.user), { secure: true, sameSite: "Strict" });

  // Navigation et notification
  Swal.fire({
    icon: "success",
    title: "Connexion réussie",
    text: "Vous êtes connecté.",
  });
  console.log(response.data.user.type)

  switch (response.data.user.type) {
    case "user":
      navigate("/home");
      console.log("user")
      break;
    case "commercial":
      navigate("/dashboard");
      console.log("admin")
      break;
    case "superAdmin":
      navigate("/superDashboard");
      break;
    default:
      navigate("/");
  }

      // Navigation en fonction du rôle
      // if (response.data.role === "user") {
      //   navigate("/home-client");
      // } else if (response.data.role === "admin") {
      //   navigate("/dashboard");
      // } else if (response.data.role === "superAdmin") {
      //   navigate("/superDashboard");
      // }

      
    } catch (error) {
      // Gestion des erreurs
      const errorMessage = error.response?.data.message || error.message;
      setError(errorMessage);

      Swal.fire({
        icon: "error",
        title: "Échec de la connexion",
        text: errorMessage,
      });
    }
  };

  return (
    <div className="signin-container">
      <h2>Connexion</h2>
      <form onSubmit={handleLogin} noValidate>
        {error && <div className="error-message-box">{error}</div>}

        <div className="form-group">
          <label>Nom d'utilisateur</label>
          <input
            type="text"
            name="UserName"
            value={formData.UserName}
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
