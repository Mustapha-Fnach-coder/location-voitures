import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importation de Link

const Header = () => {
  return (
    <Navbar
      fixed="top" // Barre de navigation fixe en haut
      bg="transparent" // Fond transparent
      variant="dark"
      expand="lg"
      className="shadow-sm"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} // Fond semi-transparent avec opacité
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" className="fw-bold text-warning">
          AutoRent
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home" className="nav-link text-dark">
              Accueil
            </Link>
            <Link to="/voitures" className="nav-link text-dark">
              Voitures
            </Link>
            <Link to="/about" className="nav-link text-dark">
              À propos
            </Link>
            <Link to="/contact" className="nav-link text-dark">
              Contact
            </Link>
            <Link to="/nous" className="nav-link text-dark">
              Pour quoi nous
            </Link>
          </Nav>

          {/* Right-side Buttons */}
          <div className="d-flex align-items-center">
            <Button variant="btn btn-warning" className="me-2">
              Reserver
            </Button>
            <Button variant="outline-warning" className="me-2">
              Mes Reservations
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
