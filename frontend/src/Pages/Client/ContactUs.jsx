import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    typeDemande: "",
    nomComplet: "",
    email: "",
    telephone: "",
    paysVille: "",
    message: "",
    captcha: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.typeDemande) newErrors.typeDemande = "Le type de demande est obligatoire.";
    if (!formData.nomComplet) newErrors.nomComplet = "Le nom complet est obligatoire.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Une adresse email valide est obligatoire.";
    if (!formData.telephone || !/^\+?\d+$/.test(formData.telephone)) newErrors.telephone = "Un numéro de téléphone valide est obligatoire.";
    if (!formData.paysVille) newErrors.paysVille = "Le pays/ville est obligatoire.";
    if (!formData.message) newErrors.message = "Le message est obligatoire.";
    if (formData.captcha !== "42") newErrors.captcha = "La réponse au captcha est incorrecte.";
    if (!formData.acceptTerms) newErrors.acceptTerms = "Vous devez accepter les conditions générales.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage("Votre formulaire a été envoyé avec succès!");
      setErrors({});
      // Réinitialiser le formulaire si nécessaire
      setFormData({
        typeDemande: "",
        nomComplet: "",
        email: "",
        telephone: "",
        paysVille: "",
        message: "",
        captcha: "",
        acceptTerms: false,
      });
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-warning text-center mb-4">CONTACTEZ-NOUS!</h1>
      <p className="text-center">
        Pour toutes questions relatives à votre réservation en ligne ou pour une demande de devis personnalisé, contactez notre Service clients.
      </p>

      <div className="row">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="typeDemande" className="form-label">Type de demande *</label>
              <select id="typeDemande" className={`form-select ${errors.typeDemande ? "is-invalid" : ""}`} value={formData.typeDemande} onChange={handleChange}>
                <option value="">Choisissez le type de la demande</option>
                <option value="reservation">Réservation</option>
                <option value="reclamation">Réclamation</option>
              </select>
              {errors.typeDemande && <div className="invalid-feedback">{errors.typeDemande}</div>}
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="nomComplet" className="form-label">Nom complet *</label>
                <input
                  type="text"
                  id="nomComplet"
                  className={`form-control ${errors.nomComplet ? "is-invalid" : ""}`}
                  value={formData.nomComplet}
                  onChange={handleChange}
                />
                {errors.nomComplet && <div className="invalid-feedback">{errors.nomComplet}</div>}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">E-mail *</label>
                <input
                  type="email"
                  id="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="telephone" className="form-label">Tél *</label>
                <input
                  type="tel"
                  id="telephone"
                  className={`form-control ${errors.telephone ? "is-invalid" : ""}`}
                  value={formData.telephone}
                  onChange={handleChange}
                />
                {errors.telephone && <div className="invalid-feedback">{errors.telephone}</div>}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="paysVille" className="form-label">Pays/Ville *</label>
                <input
                  type="text"
                  id="paysVille"
                  className={`form-control ${errors.paysVille ? "is-invalid" : ""}`}
                  value={formData.paysVille}
                  onChange={handleChange}
                />
                {errors.paysVille && <div className="invalid-feedback">{errors.paysVille}</div>}
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message *</label>
              <textarea
                id="message"
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="captcha" className="form-label text-warning">21 + 21 =</label>
              <input
                type="text"
                id="captcha"
                className={`form-control ${errors.captcha ? "is-invalid" : ""}`}
                value={formData.captcha}
                onChange={handleChange}
                required
              />
              {errors.captcha && <div className="invalid-feedback">{errors.captcha}</div>}
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                id="acceptTerms"
                className={`form-check-input ${errors.acceptTerms ? "is-invalid" : ""}`}
                checked={formData.acceptTerms}
                onChange={handleChange}
              />
              <label htmlFor="acceptTerms" className="form-check-label">
                J’ai lu et accepté les conditions générales d’utilisation, notamment la mention relative à la protection des données personnelles.
              </label>
              {errors.acceptTerms && <div className="invalid-feedback">{errors.acceptTerms}</div>}
            </div>

            <button type="submit" className="btn btn-warning">Envoyer</button>
            {successMessage && <p className="text-success mt-3">{successMessage}</p>}
          </form>
        </div>

        <div className="col-md-4">
          <h5>Email de réservation</h5>
          <p>booking@aircar.ma</p>

          <h5>Email de réclamation</h5>
          <p>complaints@aircar.ma</p>

          <h5>Téléphone</h5>
          <p>+212 (0) 5 22 26 91 68</p>

          <h5>Adresse</h5>
          <p>Casablanca - Centre Ville<br />36A Boulevard d'ANFA<br />Casablanca</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
