import React from 'react';

// Définir un tableau d'objets contenant les détails
const details = [
  {
    id: 1,
    title: "Service de Qualité",
    description: "Nous vous offrons un service exceptionnel et personnalisé pour chaque réservation.",
    icon: "👍"
  },
  {
    id: 2,
    title: "Voitures Récentes",
    description: "Notre flotte de voitures est constamment mise à jour avec les derniers modèles pour garantir confort et sécurité.",
    icon: "🚗"
  },
  {
    id: 3,
    title: "Sécurité Garantie",
    description: "Toutes nos voitures sont équipées des dernières normes de sécurité pour vous offrir la tranquillité d'esprit.",
    icon: "🛡️"
  },
  {
    id: 4,
    title: "Assistance 24/7",
    description: "Nous sommes là pour vous, à tout moment, pour répondre à vos questions ou vous aider en cas de besoin.",
    icon: "🤝"
  }
];

const WhyUs = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Pourquoi Nous Choisir ?</h2>
      <div className="row">
        {/* Utilisation de map pour afficher dynamiquement les détails */}
        {details.map((item) => (
          <div key={item.id} className="col-md-6 col-lg-3 mb-4">
            <div className="card shadow-lg border-0 rounded">
              <div className="card-body text-center">
                <div className="icon" style={{ fontSize: '3rem' }}>
                  {item.icon}
                </div>
                <h5 className="card-title mt-3">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
