import { Link } from "react-router-dom";

const Footer = () => {
    const agences = [
        { path: "/hertz-france", label: "Hertz France" },
        { path: "/hertz-reunion", label: "Hertz Réunion" },
        { path: "/partenaires", label: "Partenaires" },
      ];
  return (
    <footer className="footer bg-dark text-white pt-4 pb-2 fixed-bottom">
      <div className="container">
        <div className="row">
          {/* Section Hertz.ma */}
          <div className="col-md-3">
            <h5 className="text-uppercase mb-4">HERTZ.MA</h5>
            <ul className="list-unstyled">
              <li><Link to="/contact" className="text-white text-decoration-none">Contactez-nous !</Link></li>
              <li><Link to="/conditions" className="text-white text-decoration-none">Conditions Générales</Link></li>
              <li><Link to="/mentions-legales" className="text-white text-decoration-none">Mentions légales</Link></li>
              <li><Link to="/faq" className="text-white text-decoration-none">Foire aux Questions</Link></li>
              <li><Link to="/assistance" className="text-white text-decoration-none">Assistance Hertz Maroc</Link></li>
            </ul>
          </div>

          {/* Section Hertz Maroc */}
          <div className="col-md-3">
            <h5 className="text-uppercase mb-4">HERTZ MAROC</h5>
            <ul className="list-unstyled">
              <li><Link to="/decouvrir" className="text-white text-decoration-none">Découvrir le Maroc</Link></li>
              <li><Link to="/recrutement" className="text-white text-decoration-none">Recrutement</Link></li>
              <li><Link to="/qui-sommes-nous" className="text-white text-decoration-none">Qui sommes-nous ?</Link></li>
              <li><Link to="/agences" className="text-white text-decoration-none">Nos agences</Link></li>
              <li><Link to="/promotions" className="text-white text-decoration-none">Nos promotions</Link></li>
            </ul>
          </div>

          {/* Section Offres et Produits */}
          <div className="col-md-3">
            <h5 className="text-uppercase mb-4">OFFRES ET PRODUITS</h5>
            <ul className="list-unstyled">
              <li><Link to="/vehicules" className="text-white text-decoration-none">Nos véhicules</Link></li>
              <li><Link to="/vehicules-occasion" className="text-white text-decoration-none">Véhicules d'occasion</Link></li>
            </ul>
          </div>

          {/* Section Partenaires */}
          <div className="col-md-3">
            <h5 className="text-uppercase mb-4">NOS PARTENAIRES</h5>
            <ul className="list-unstyled">
                {agences.map((agence, index) => (
                <li key={index}>
                  <Link to={agence.path} className="text-white text-decoration-none">
                    {agence.label}
                  </Link>
                </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p className="mb-0">© 2025 The Hertz Corporation. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
