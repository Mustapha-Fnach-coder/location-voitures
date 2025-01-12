<<<<<<< HEAD
import { Container } from 'react-bootstrap';
import './HomeClient.css';   // Assurez-vous que le fichier CSS est bien importé
import BestVehicule from './Component/BestVehicule';
import PouQoi from './Component/PouQoi';


export default function HomeClient() {
  return (
    <Container  className="home-client">
      <BestVehicule />
      <PouQoi />
    </Container>
  );
=======
import React from 'react'
import WhyUs from "../Client/components/nous";
import ReservationForm from '../Client/components/FormReservation'

export default function HomeClient() {
  return (
    <div>HomeClient
      <ReservationForm/>
      <WhyUs/>
    </div>
  )
>>>>>>> 93299900fd9450475a92b25f43675253fca548e5
}
