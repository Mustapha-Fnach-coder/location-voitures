import WhyUs from "../Client/components/nous";
import ReservationForm from '../Client/components/FormReservation'
import BestVehicule from './components/BestVehicule';
import PouQoi from './components/PouQoi';


export default function HomeClient() {
  return (
    <div className="home-client">
      <ReservationForm/>
      <WhyUs/>
      <BestVehicule />
      <PouQoi />
    </div>

  )

}