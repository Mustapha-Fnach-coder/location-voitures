import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CheckRole from './Middleware/CheckRole';
import HomeClient from './Pages/Client/HomeClient';
import Layout from './Pages/Client/Layout';

function App() {
  return (
    <Router>
      <Routes>
      <Route 
        path="/home" 
        element={
          <CheckRole >
            <Layout>
              <HomeClient />
            </Layout>
          </CheckRole>
                    } 
                />
      </Routes>
    </Router>
  );
}

export default App;