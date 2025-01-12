import { Card, Col, Row, Button } from 'react-bootstrap';

import ImageCover from "../../../img/commercial.jpeg"; // Chemin de l'image

// Exemple de données de véhicules avec les nouveaux champs
const vehicles = [
  {
    id: 1,
    matricule: 'AB123CD',
    marque: 'Peugeot',
    model: '208',
    annee: 2020,
    type: 'Hatchback',
    prixJour: 30,
    imageUrl: ImageCover, // Remplacez par l'URL de l'image réelle
  },
  {
    id: 2,
    matricule: 'EF456GH',
    marque: 'Renault',
    model: 'Clio',
    annee: 2021,
    type: 'Sedan',
    prixJour: 35,
    imageUrl: ImageCover, // Remplacez par l'URL de l'image réelle
  },
  {
    id: 3,
    matricule: 'IJ789KL',
    marque: 'Toyota',
    model: 'Corolla',
    annee: 2022,
    type: 'SUV',
    prixJour: 40,
    imageUrl: ImageCover, // Remplacez par l'URL de l'image réelle
  },
  {
    id: 4,
    matricule: 'AB123CD',
    marque: 'Peugeot',
    model: '208',
    annee: 2020,
    type: 'Hatchback',
    prixJour: 30,
    imageUrl: ImageCover, // Remplacez par l'URL de l'image réelle
  },
  {
    id: 5,
    matricule: 'EF456GH',
    marque: 'Renault',
    model: 'Clio',
    annee: 2021,
    type: 'Sedan',
    prixJour: 35,
    imageUrl: ImageCover, // Remplacez par l'URL de l'image réelle
  },
  {
    id: 6,
    matricule: 'IJ789KL',
    marque: 'Toyota',
    model: 'Corolla',
    annee: 2022,
    type: 'SUV',
    prixJour: 40,
    imageUrl: ImageCover, // Remplacez par l'URL de l'image réelle
  },
];

// Composant React pour afficher la liste des véhicules
const BestVehicule = () => {
  return (
    <div className="vehicle-list">
      <h1 className="text-center mb-4">Véhicules BestOffre</h1>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {vehicles.map((vehicle) => (
          <Col key={vehicle.id}>
            <Card className="vehicle-card">
              <Card.Img variant="top" src={vehicle.imageUrl} alt={vehicle.model} className="vehicle-image" />
              <Card.Body>
                <Card.Title>{vehicle.marque} {vehicle.model}</Card.Title>
                <Card.Text>
                  <strong>Matricule:</strong> {vehicle.matricule}
                </Card.Text>
                <Card.Text>
                  <strong>Année:</strong> {vehicle.annee}
                </Card.Text>
                <Card.Text>
                  <strong>Type:</strong> {vehicle.type}
                </Card.Text>
                <Card.Text>
                  <strong>Prix par jour:</strong> {vehicle.prixJour}€
                </Card.Text>
                <Button variant="warning">Reserver</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BestVehicule;
