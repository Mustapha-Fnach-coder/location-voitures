import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importation des composants de page
import HomeClient from './Pages/Client/HomeClient';
// import About from './Pages/Client/About';   // Nouvelle page 'À propos'
// import Contact from './Pages/Client/Contact'; // Nouvelle page 'Contact'
// import Profile from './Pages/Client/Profile'; // Nouvelle page 'Profil'
import Layout from './Pages/Client/Layout';
// import ContactUs from './Pages/Client/ContactUs';

// Optionnel : Importer un middleware pour la gestion des rôles si nécessaire
// import CheckRole from './Middleware/CheckRole';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            // Si vous utilisez un middleware comme CheckRole, décommentez et utilisez-le
            // <CheckRole> 
              <Layout>
                <HomeClient />

              </Layout>
            // </CheckRole>
          } 
        />
         {/* <Route 
          path="/ContactUs" 
          element={
            // Si vous utilisez un middleware comme CheckRole, décommentez et utilisez-le
            // <CheckRole> 
              <Layout>
                <ContactUs />

              </Layout>
            // </CheckRole>
          } 
        /> */}

        {/* <Route 
          path="/about" 
          element={
            <Layout>
              <About />
            </Layout>
          } 
        />

        <Route 
          path="/contact" 
          element={
            <Layout>
              <Contact />
            </Layout>
          } 
        />

        <Route 
          path="/voitures" 
          element={
            <Layout>
              <Voitures />
            </Layout>
          } 
        />
         */}

      </Routes>
    </Router>
  );
}

export default App;