// src/components/CarDetails.js
import { useParams } from "react-router-dom";
import {cars} from "./Voitures";
import FormReservation from "../Client/components/FormReservation";

const CarDetails = () => {
  const { id } = useParams();
  const car = cars.find((car) => car.id === parseInt(id));

  if (!car) {
    return <div className="container mt-4">Car not found!</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={car.image}
            className="img-fluid rounded"
            alt={car.marque + " " + car.model}
          />
        </div>
        <div className="col-md-6">
          <h3>{car.marque} {car.model}</h3>
          <p><strong>Année:</strong> {car.annee}</p>
          <p><strong>Type:</strong> {car.type}</p>
          <p><strong>Prix:</strong> {car.price} DH / Day</p>
          <p><strong>Fuel:</strong> {car.fuel}</p>
          <p><strong>Transmission:</strong> {car.transmission}</p>
          <p><strong>Description:</strong> {car.description}</p>
        </div>
      </div>
      <FormReservation />
    </div>
    
  );
  
};

export default CarDetails;
