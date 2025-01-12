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
}
