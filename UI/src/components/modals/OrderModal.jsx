import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faUnlockAlt,
  faRocket
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Card,
  Form,
  Button,
  InputGroup,
  Modal
} from "@themesberg/react-bootstrap";

const OrderModal = ({ isModalOpen, handleClick, data }) => {
  const descuento = 0.25;
  const distancia = 200;
  const camiones = 300;

  // const approvetruck = (total, needed) => {
  //   const [available, setAvailable] = useState(trucks);
  //   let count = total;
  //   setAvailable(count - needed);
  //   return available;
  // };
  const [currentSum, setCurrentSum] = useState(0);

  const sumTotal = (rate, distance, discount) => {
    function formatToCurrency(amount) {
      return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    }
    let sum = 0;
    rate === "plena"
      ? (sum = 15000 * distance)
      : rate === "reducida"
      ? (sum = 15000 * distance * (1 - discount))
      : rate === "preferencial"
      ? (sum = 5000 * distance)
      : (sum = 0);
    const result = formatToCurrency(sum);
    return result;
  };
  const {
    nombre,
    userID,
    descripcion,
    cantidad,
    vehiculos,
    origen,
    destino,
    estado,
    peso,
    fecha_creacion,
    comentarios,
    ordenID,
    tarifa
  } = data;
  return (
    <>
      {isModalOpen && (
        <Modal as={Modal.Dialog} centered show={isModalOpen}>
          <Modal.Header>
            <Modal.Title className="h6">Detalle de la Solicitud</Modal.Title>
            <Button variant="close" aria-label="Close" onClick={handleClick} />
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row lg={10}>
                <Col lg className="mb-3">
                  <Form.Group id="firstName">
                    <Form.Label>Nombre del producto/s</Form.Label>
                    <Form.Text className="mb-2">{nombre}</Form.Text>
                  </Form.Group>
                </Col>
                <Col md={12} className="mb-3">
                  <Form.Group id="lastName">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Text className="mb-2">{descripcion}</Form.Text>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Peso: </Form.Label>
                    <Form.Text className="mb-2">
                      {" "}
                      {peso}
                      {" Kg"}
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col sm={4}>
                  <Form.Group>
                    <Form.Label>Vehículos solicitados: </Form.Label>
                    <Form.Text className="mb-2">{vehiculos}</Form.Text>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col sm={4} className="mb-3">
                  <Form.Group className="mb-2">
                    <Form.Label>Lugar de recogida</Form.Label>
                    <Form.Text>{origen}</Form.Text>
                  </Form.Group>
                </Col>
                <Col sm={4} className="mb-3">
                  <Form.Group className="mb-2">
                    <Form.Label>Lugar de entrega</Form.Label>
                    <Form.Text>{destino}</Form.Text>
                  </Form.Group>
                </Col>
                <Col sm={4} className="mb-3">
                  <Form.Group className="mb-2">
                    <Form.Label>Distancia en Km</Form.Label>
                    <Form.Text>{distancia}</Form.Text>
                  </Form.Group>
                </Col>
              </Row>
              <h5 className="my-4">Evaluación operativa</h5>
              <Row>
                <Col sm={4} className="mb-3">
                  <Form.Group className="mb-2">
                    <Form.Label>Ingreso estimados</Form.Label>
                    <Form.Text>
                      {"COP $ "}
                      {sumTotal(tarifa, distancia, descuento)}
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col sm={4} className="mb-3">
                  <Form.Group className="mb-2">
                    <Form.Label>Camiones disponibles</Form.Label>
                    <Form.Text>{camiones}</Form.Text>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="link"
              className="text-align-left ms-auto"
              onClick={handleClick}
            >
              Volver
            </Button>
            <Button variant="danger" className="ms-auto" onClick={handleClick}>
              Rechazar
            </Button>
            <Button
              variant="tertiary"
              className="ms-auto"
              onClick={handleClick}
            >
              Aprobar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default OrderModal;
