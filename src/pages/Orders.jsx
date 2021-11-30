import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCog,
  faHome,
  faSearch,
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
  Dropdown
} from "@themesberg/react-bootstrap";

import { OrdersTable } from "../components/Tables";

import { Routes } from "../routes";

const Orders = (props) => {
  const [pageLimit, setPageLimit] = useState("");
  const handleSelect = (e) => {
    console.log(e);
    setPageLimit(e);
  };
  return (
    <>
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
            <Breadcrumb.Item active>Últimos pedidos</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Últimos pedidos</h4>
          <p className="mb-0">
            Consulte aquí las órdenes de despacho para el día de hoy.
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
              Crear nueva órden
            </Button>
          </ButtonGroup>
        </div>
      </div>

      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" />
            </InputGroup>
          </Col>
          <Col xs={4} md={2} xl={1} className="ps-md-0 text-end">
            <Dropdown drop="down" as={ButtonGroup}>
              <Dropdown.Toggle
                split
                as={Button}
                variant="link"
                className="text-dark m-0 px-2"
              >
                <span className="icon icon-sm icon-gray">
                  <FontAwesomeIcon icon={faFilter} />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className=" dropdown-menu-left me-2">
                <Dropdown.Item className="d-flex fw-bold">
                  Todas{" "}
                  <span className="icon icon-small ms-auto">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">
                  Pendiente por despacho
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">Despachada</Dropdown.Item>
                <Dropdown.Item className="fw-bold">Finalizada</Dropdown.Item>
                <Dropdown.Item className="fw-bold">Cancelada</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown drop="down" as={ButtonGroup}>
              <Dropdown.Toggle
                split
                as={Button}
                variant="link"
                className="text-dark m-0 p-0"
              >
                <span className="icon icon-sm icon-gray">
                  <FontAwesomeIcon icon={faCog} />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-left">
                <Dropdown.Item className="fw-bold text-dark">
                  Mostrar
                </Dropdown.Item>
                <Dropdown.Item
                  as={Button}
                  onSelect={() => handleSelect("10")}
                  className="d-flex fw-bold"
                >
                  10{" "}
                  <span className="icon icon-small ms-auto">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">25</Dropdown.Item>
                <Dropdown.Item className="fw-bold">50</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </div>

      <OrdersTable pageLimit={pageLimit} />
    </>
  );
};

export default Orders;
