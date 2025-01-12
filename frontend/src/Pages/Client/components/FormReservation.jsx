import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    dateDebut: "",
    heureDebut: "",
    dateFin: "",
    heureFin: "",
    lieuDepart: "",
    lieuArrive: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";
    const today = new Date().toISOString().split("T")[0];

    switch (name) {
      case "dateDebut":
        if (!value) {
          error = "Veuillez sélectionner une date de début.";
        } else if (value < today) {
          error = "La date de début doit être aujourd'hui ou plus tard.";
        }
        break;

      case "dateFin":
        if (!value) {
          error = "Veuillez sélectionner une date de fin.";
        } else if (value < formData.dateDebut) {
          error = "La date de fin doit être après la date de début.";
        }
        break;

      case "heureDebut":
        if (!value) {
          error = "Veuillez sélectionner une heure de début.";
        }
        break;

      case "heureFin":
        if (!value) {
          error = "Veuillez sélectionner une heure de fin.";
        } else if (formData.dateDebut === formData.dateFin && value <= formData.heureDebut) {
          error = "L'heure de fin doit être après l'heure de début si les dates sont identiques.";
        }
        break;

      case "lieuDepart":
        if (!value) {
          error = "Veuillez choisir un lieu de départ.";
        }
        break;

      case "lieuArrive":
        if (!value) {
          error = "Veuillez choisir un lieu d'arrivée.";
        } else if (value === formData.lieuDepart) {
          error = "Le lieu d'arrivée doit être différent du lieu de départ.";
        }
        break;

      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateAll = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
      if (errors[field]) {
        newErrors[field] = errors[field];
      }
    });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      console.log("Données soumises :", formData);
      alert("Réservation réussie !");
      setFormData({
        dateDebut: "",
        heureDebut: "",
        dateFin: "",
        heureFin: "",
        lieuDepart: "",
        lieuArrive: "",
      });
      setErrors({});
    }
  };

  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        borderRadius: "10px",
        padding: "20px",
        width: "70%",
        margin: "30px auto",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <h3 className="text-center mb-4">Réservation</h3>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="dateDebut">
              <Form.Label>Date de début</Form.Label>
              <Form.Control
                type="date"
                name="dateDebut"
                value={formData.dateDebut}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.dateDebut}
                min={new Date().toISOString().split("T")[0]}
              />
              <Form.Control.Feedback type="invalid">
                {errors.dateDebut}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="heureDebut">
              <Form.Label>Heure de début</Form.Label>
              <Form.Control
                type="time"
                name="heureDebut"
                value={formData.heureDebut}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.heureDebut}
              />
              <Form.Control.Feedback type="invalid">
                {errors.heureDebut}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="dateFin">
              <Form.Label>Date de fin</Form.Label>
              <Form.Control
                type="date"
                name="dateFin"
                value={formData.dateFin}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.dateFin}
                min={formData.dateDebut || new Date().toISOString().split("T")[0]}
              />
              <Form.Control.Feedback type="invalid">
                {errors.dateFin}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="heureFin">
              <Form.Label>Heure de fin</Form.Label>
              <Form.Control
                type="time"
                name="heureFin"
                value={formData.heureFin}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.heureFin}
              />
              <Form.Control.Feedback type="invalid">
                {errors.heureFin}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="lieuDepart">
              <Form.Label>Lieu de départ</Form.Label>
              <Form.Control
                type="text"
                name="lieuDepart"
                value={formData.lieuDepart}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.lieuDepart}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lieuDepart}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lieuArrive">
              <Form.Label>Lieu d'arrivée</Form.Label>
              <Form.Control
                type="text"
                name="lieuArrive"
                value={formData.lieuArrive}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.lieuArrive}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lieuArrive}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <div className="text-center">
          <Button type="submit" variant="primary">
            Réservers
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ReservationForm;
