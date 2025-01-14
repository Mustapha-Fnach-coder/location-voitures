import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    const agences = [
        { path: "/hertz-france", label: "Hertz France" },
        { path: "/hertz-reunion", label: "Hertz Réunion" },
        { path: "/partenaires", label: "Partenaires" },
      ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Section Hertz.ma */}
          <div className="column">
            <h5>HERTZ.MA</h5>
            <ul className="list">
              <li><Link to="/contact">Contactez-nous !</Link></li>
              <li><Link to="/conditions">Conditions Générales</Link></li>
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
              <li><Link to="/faq">Foire aux Questions</Link></li>
              <li><Link to="/assistance">Assistance Hertz Maroc</Link></li>
            </ul>
          </div>

          {/* Section Hertz Maroc */}
          <div className="column">
            <h5>HERTZ MAROC</h5>
            <ul className="list">
              <li><Link to="/decouvrir">Découvrir le Maroc</Link></li>
              <li><Link to="/recrutement">Recrutement</Link></li>
              <li><Link to="/qui-sommes-nous">Qui sommes-nous ?</Link></li>
              <li><Link to="/agences">Nos agences</Link></li>
              <li><Link to="/promotions">Nos promotions</Link></li>
            </ul>
          </div>

          {/* Section Offres et Produits */}
          <div className="column">
            <h5>OFFRES ET PRODUITS</h5>
            <ul className="list">
              <li><Link to="/vehicules">Nos véhicules</Link></li>
              <li><Link to="/vehicules-occasion">Véhicules occasion</Link></li>
            </ul>
          </div>

          {/* Section Partenaires */}
          <div className="column">
            <h5>NOS PARTENAIRES</h5>
            <ul className="list">
                {agences.map((agence, index) => (
                <li key={index}>
                  <Link to={agence.path}>
                    {agence.label}
                  </Link>
                </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center">
          <p>© 2025 The Hertz Corporation. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
