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

const OrderModal = ({ isModalOpen, handleClose, handleClick }) => {
  return (
    <>
      {isModalOpen && (
        <Modal
          as={Modal.Dialog}
          centered
          show={isModalOpen}
          // onHide={handleClose}
        >
          <Modal.Header>
            <Modal.Title className="h6">Detalle de la orden</Modal.Title>
            <Button variant="close" aria-label="Close" onClick={handleClose} />
          </Modal.Header>
          <Modal.Body>
            <h5 className="mb-4">Información general</h5>
            <Form>
              <Row>
                <Col md={10} className="mb-3">
                  <Form.Group id="firstName">
                    <Form.Label>Nombre del producto/s</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ej: tablas de madera"
                    />
                  </Form.Group>
                </Col>
                <Col md={12} className="mb-3">
                  <Form.Group id="lastName">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="ej: Aparato usado como materia prima para eleboración de muebles y accesorios"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group id="emal">
                    <Form.Label>Peso</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Indique el peso en Kg."
                    />
                  </Form.Group>
                </Col>
                <Col sm={4} className="mb-3">
                  <Form.Group className="mb-2">
                    <Form.Label>Vehículos necesarios</Form.Label>
                    <Form.Select id="vehiculos" defaultValue="0">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <h5 className="my-4">Información Logística</h5>
              <Row>
                <Col sm={4} className="mb-3">
                  <Form.Group className="mb-2">
                    <Form.Label>Lugar de recogida</Form.Label>
                    <Form.Select id="recogida" defaultValue="0">
                      <option value="0">Terminal de Transporte</option>
                      <option value="AL">Aeropuerto</option>
                      <option value="AK">Central de abastecimiento</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col sm={4} className="mb-3">
                  <Form.Group className="mb-2">
                    <Form.Label>Lugar de entrega</Form.Label>
                    <Form.Select id="recogida" defaultValue="0">
                      <option value="0">Terminal de Transporte</option>
                      <option value="AL">Aeropuerto</option>
                      <option value="AK">Central de abastecimiento</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cancelar orden
            </Button>
            <Button
              variant="link"
              className="text-gray ms-auto"
              onClick={handleClose}
            >
              Atras
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default OrderModal;
