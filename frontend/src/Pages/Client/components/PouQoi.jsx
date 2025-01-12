import ImageCover from "../../../img/commercial.jpeg";

const PouQoi = () => {
  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1 className="text-warning">Location simple et abordable</h1>
      </header>

      <section className="row mb-4">
        <div className="col-md-4">
          <img
            src={ImageCover} // Remplacez par votre image
            alt="Laptop showing Aircar website"
            className="img-fluid"
          />
        </div>
        <div className="col-md-4">
          <img
            src={ImageCover}// Remplacez par votre image
            alt="Handshake"
            className="img-fluid"
          />
        </div>
        <div className="col-md-4">
          <img
            src={ImageCover} // Remplacez par votre image
            alt="Family in car"
            className="img-fluid"
          />
        </div>
      </section>

      <section className="text-center mb-4">
        <h2>Avec plus de 20 ans d’expérience, AIRCAR est un des principaux loueurs de voitures au Maroc</h2>
        <p>
          Vous voulez louer votre voiture au meilleur tarif tout compris? En plus de
          son expérience cumulée depuis 2001, AIRCAR vous permet de profiter de locations :
        </p>
        <ul className="list-unstyled">
          <li>Aux prix compétitifs et bien étudiés</li>
          <li>Adaptés aux différents budgets</li>
          <li>Pour particuliers et professionnels</li>
          <li>Pour tout type d'usage</li>
        </ul>
      </section>

      <section>
        <h3 className="text-center text-warning">Comment louer une voiture?</h3>
        <div className="row mt-4">
          <div className="col-md-3">
            <h4>1 – Renseignez la date/lieu</h4>
            <p>Entrez le créneau et la ville auxquels vous souhaitez prendre/rendre votre voiture.</p>
          </div>
          <div className="col-md-3">
            <h4>2 – Choisissez votre voiture</h4>
            <p>Faites votre choix en indiquant vos préférences ; les disponibilités sont en temps réel !</p>
          </div>
          <div className="col-md-3">
            <h4>3 – Valider le paiement</h4>
            <p>Entrez les informations nécessaires et effectuez votre paiement en ligne.</p>
          </div>
          <div className="col-md-3">
            <h4>4 – Votre voiture est prête</h4>
            <p>Félicitations ! Vous n’avez qu’à récupérer vos clés maintenant après passage à l’agence !</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PouQoi;
