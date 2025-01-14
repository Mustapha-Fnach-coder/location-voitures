// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // Importation des composants de page
// import HomeClient from './Pages/Client/HomeClient';
// // import About from './Pages/Client/About';   // Nouvelle page 'À propos'
// // import Contact from './Pages/Client/Contact'; // Nouvelle page 'Contact'
// // import Profile from './Pages/Client/Profile'; // Nouvelle page 'Profil'
// import Layout from './Pages/Client/Layout';
// import ContactUs from './Pages/Client/ContactUs';
// import WhyUs from './Pages/Client/components/nous';
// import Voitures from './Pages/Client/Voitures';
// import CarDetails from './Pages/Client/CarDetails';
// import Signin from './Auth/Signin';
// import Signup from './Auth/Signup';
// import FormReservation from './Pages/Client/components/FormReservation';
// import MesReservation from './Pages/Client/MesReservation';
// import RoleBasedRoute from './Middleware/CheckRole';

// // Optionnel : Importer un middleware pour la gestion des rôles si nécessaire
// // import CheckRole from './Middleware/CheckRole';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route 
//           path="/home" 
//           element={
            
//             // Si vous utilisez un middleware comme CheckRole, décommentez et utilisez-le
//             <RoleBasedRoute role="user" > 
//               <Layout>
//                 <HomeClient />
//               </Layout>
              
//              </RoleBasedRoute>
//           } 
//         />
//         <Route 
//           path="/ContactUs" 
//           element={
//             // Si vous utilisez un middleware comme CheckRole, décommentez et utilisez-le
//             // <CheckRole> 
//               <Layout>
//                 <ContactUs />
                
//               </Layout>
//             // </CheckRole>
//           } 
//         />

//         <Route 
//           path="/WhyUs" 
//           element={
//             // Si vous utilisez un middleware comme CheckRole, décommentez et utilisez-le
//             // <CheckRole> 
//               <Layout>
//                 <WhyUs />
                
//               </Layout>
//             // </CheckRole>
//           } 
//         />


//         <Route 
//           path="/Voitures" 
//           element={
//             // Si vous utilisez un middleware comme CheckRole, décommentez et utilisez-le
//             // <CheckRole> 
//               <Layout>
//                 <Voitures />
                
//               </Layout>
//             // </CheckRole>
//           } 
//         />

//           <Route 
//           path="/MesReservation" 
//           element={
//             // Si vous utilisez un middleware comme CheckRole, décommentez et utilisez-le
//             <RoleBasedRoute role="client"> 
//               <Layout>
//                 <FormReservation />
//                 <MesReservation />
//               </Layout>
//              </RoleBasedRoute>
//           } 
//         />

//         <Route 
//           path="/car/:id" 
//           element={
//             // Si vous utilisez un middleware comme CheckRole, décommentez et utilisez-le
//             // <CheckRole> 
//               <Layout>
//                 <CarDetails />
//               </Layout>
//             // </CheckRole>
//           } 
//         />

//         <Route 
//           path="/Signin" 
//           element={
//             // Si vous utilisez un middleware comme CheckRole, décommentez et utilisez-le
//             // <CheckRole> 
//               <Layout>
//                 <Signin />
//               </Layout>
//             // </CheckRole>
//           } 
//         />

// <Route 
//           path="/Signup" 
//           element={
//             // Si vous utilisez un middleware comme CheckRole, décommentez et utilisez-le
//             // <CheckRole> 
//               <Layout>
//                 <Signup />
//               </Layout>
//             // </CheckRole>
//           } 
//         />
        
//         {/* <Route 
//           path="/about" 
//           element={
//             <Layout>
//               <About />
//             </Layout>
//           } 
//         />
        
//         <Route 
//           path="/contact" 
//           element={
//             <Layout>
//               <Contact />
//             </Layout>
//           } 
//         />
        
//         <Route 
//           path="/voitures" 
//           element={
//             <Layout>
//               <Voitures />
//             </Layout>
//           } 
//         />
//          */}
       
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importation des composants de page
import HomeClient from "./Pages/Client/HomeClient";
import ContactUs from "./Pages/Client/ContactUs";
import WhyUs from "./Pages/Client/components/nous";
import Voitures from "./Pages/Client/Voitures";
import CarDetails from "./Pages/Client/CarDetails";
import Signin from "./Auth/Signin";
import Signup from "./Auth/Signup";
import FormReservation from "./Pages/Client/components/FormReservation";
import MesReservation from "./Pages/Client/MesReservation";
import Layout from "./Pages/Client/Layout";
import { RoleBasedRoute } from "./Middleware/CheckRole";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<RoleBasedRoute role="user"><Layout><HomeClient /></Layout></RoleBasedRoute>} />
        <Route path="/ContactUs" element={<Layout><ContactUs /></Layout>} />
        <Route path="/WhyUs" element={<Layout><WhyUs /></Layout>} />
        <Route path="/Voitures" element={<Layout><Voitures /></Layout>} />
        <Route path="/MesReservation" element={<RoleBasedRoute role="user"><Layout><FormReservation /><MesReservation /></Layout></RoleBasedRoute>} />
        <Route path="/car/:id" element={<Layout><CarDetails /></Layout>} />
        <Route path="/Signin" element={<Layout><Signin /></Layout>} />
        <Route path="/Signup" element={<Layout><Signup /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
