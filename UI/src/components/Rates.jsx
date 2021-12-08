import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCog,
  faHome,
  faSearch,
  faEdit,
  faPlus,
  faFilter
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Form,
  Button,
  ButtonGroup,
  Breadcrumb,
  InputGroup,
  Dropdown,
  Card,
  Container
} from "@themesberg/react-bootstrap";

import { Routes } from "../routes";

const Rates = () => {
  return (
    <Container className="px-0">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb
            className="d-none d-md-inline-block"
            listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}
          >
            <Breadcrumb.Item>
              <FontAwesomeIcon icon={faHome} />
            </Breadcrumb.Item>
            <Breadcrumb.Item>Tripool</Breadcrumb.Item>
            <Breadcrumb.Item active>Tarifas</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Tarifas</h4>
          <p className="mb-0">
            Modifiqué los montos de recargo por kilometro recorrido
          </p>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <ButtonGroup>
            <Button variant="outline-primary" size="sm">
              Exportar como CSV
            </Button>
          </ButtonGroup>
          <ButtonGroup className="px-2">
            <Button
              size="sm"
              variant="secondary"
              className="text-dark me-2"
              href={Routes.NewOrder.path}
            >
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Agregar nuevo punto
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <Row>
        <Col xs={4} className="p-3">
          <Card>
            <Card.Body>
              <article>
                <h1 className="h2" id="changelog">
                  Plena{" "}
                </h1>
                <p className="fs-5 fw-light">
                  El precio por kilometro recorrido es calculado con base en la
                  tarifa fijada sin ningún tipo de descuento
                </p>

                <p className="fs-5 fw-bold">Actualizado a Diciembre de 2021</p>
                <ul className="docs-list">
                  <li>COP$15000/Km </li>
                </ul>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <ButtonGroup className="px-2">
                    <Button
                      size="sm"
                      variant="tertiary"
                      className="text-dark me-2"
                    >
                      <FontAwesomeIcon icon={faEdit} className="me-2" />
                      Actualizar
                    </Button>
                  </ButtonGroup>
                </div>
              </article>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4} className="p-3">
          <Card>
            <Card.Body>
              <article>
                <h1 className="h2" id="changelog">
                  Reducida{" "}
                </h1>
                <p className="fs-5 fw-light">
                  El costo final tiene una reducción correspondiente al
                  descuento efectuado
                </p>

                <p className="fs-5 fw-bold">Actualizado a Diciembre de 2021</p>
                <Form.Group className="mb-3">
                  <Form.Label>Tasa de descuento</Form.Label>
                  <Form.Select>
                    <option defaultValue>Seleccione </option>
                    <option>1%</option>
                    <option>2%</option>
                    <option>3%</option>
                    <option>4%</option>
                    <option>5%</option>
                    <option>6%</option>
                    <option>7%</option>
                    <option>8%</option>
                    <option>9%</option>
                    <option>10%</option>
                    <option>11%</option>
                    <option>12%</option>
                    <option>13%</option>
                    <option>14%</option>
                    <option>15%</option>
                    <option>16%</option>
                    <option>17%</option>
                    <option>18%</option>
                    <option>19%</option>
                    <option>20%</option>
                    <option>21%</option>
                    <option>22%</option>
                    <option>23%</option>
                    <option>24%</option>
                    <option>25%</option>
                    <option>26%</option>
                    <option>27%</option>
                    <option>28%</option>
                    <option>29%</option>
                    <option>30%</option>{" "}
                  </Form.Select>
                </Form.Group>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <ButtonGroup className="px-2">
                    <Button
                      size="sm"
                      variant="tertiary"
                      className="text-dark me-2"
                    >
                      <FontAwesomeIcon icon={faEdit} className="me-2" />
                      Actualizar
                    </Button>
                  </ButtonGroup>
                </div>
              </article>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4} className="p-3">
          <Card>
            <Card.Body>
              <article>
                <h1 className="h2" id="changelog">
                  Preferencial{" "}
                </h1>
                <p className="fs-5 fw-light">
                  Tarifa designada para altos volúmenes y cuentas empresariales
                </p>

                <p className="fs-5 fw-bold">Actualizado a Diciembre de 2021</p>
                <ul className="docs-list">
                  <li>COP$5000/Km </li>
                </ul>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <ButtonGroup className="px-2">
                    <Button
                      size="sm"
                      variant="tertiary"
                      className="text-dark me-2"
                    >
                      <FontAwesomeIcon icon={faEdit} className="me-2" />
                      Actualizar
                    </Button>
                  </ButtonGroup>
                </div>
              </article>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Rates;
