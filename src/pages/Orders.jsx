import React, { useState, useEffect } from "react";
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
import { OrderRow } from "../components/Tables";
import orders from "../data/orders.json";

import { Routes } from "../routes";

const status = [
  "Todas",
  "Despachada",
  "Pendiente por despacho",
  "Cancelada",
  "Finalizada"
];

const Orders = (props) => {
  const [dataLimit, setDataLimit] = useState(10);
  const [filtredOrders, setFiltredOrders] = useState(orders);

  const [active, setActive] = useState(status[0]);

  const filterOrder = (orderStatus) => {
    let filtredList = orders.filter((order) => order.estado === orderStatus);
    return filtredList;
  };

  const handleOrders = (e) => {
    console.log(e);
    let statusOrder = e;
    statusOrder !== "Todas"
      ? setFiltredOrders(filterOrder(statusOrder))
      : setFiltredOrders(orders);
    console.log(filtredOrders);
  };
  const handleSelect = (e) => {
    console.log(e);
    setDataLimit(e);
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
                {status.map((status) => (
                  <Dropdown.Item
                    className="d-flex fw-bold"
                    key={status}
                    active={active === status}
                    onClick={() => {
                      setActive(status);
                      handleOrders(status);
                    }}
                  >
                    {status}{" "}
                    {active === status && (
                      <span className="icon icon-small ms-auto">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                    )}
                  </Dropdown.Item>
                ))}

                {/* <Dropdown.Item className="d-flex fw-bold">
                  Todas{" "}
                  <span className="icon icon-small ms-auto">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                </Dropdown.Item>
                <Dropdown.Item
                  className="fw-bold"
                  onClick={() => handleOrders("Pendiente por despacho")}
                >
                  Pendiente por despacho
                </Dropdown.Item>
                <Dropdown.Item
                  className="fw-bold"
                  onClick={() => handleOrders("Despachada")}
                >
                  Despachada
                </Dropdown.Item>
                <Dropdown.Item
                  className="fw-bold"
                  onClick={() => handleOrders("Finalizada")}
                >
                  Finalizada
                </Dropdown.Item>
                <Dropdown.Item
                  className="fw-bold"
                  onClick={() => handleOrders("Cancelada")}
                >
                  Cancelada
                </Dropdown.Item> */}
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
                  onSelect={() => handleSelect(10)}
                  className="d-flex fw-bold"
                >
                  10{" "}
                  <span className="icon icon-small ms-auto">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                </Dropdown.Item>
                <Dropdown.Item
                  as={Button}
                  onSelect={() => handleSelect(25)}
                  className="d-flex fw-bold"
                >
                  25
                </Dropdown.Item>
                <Dropdown.Item
                  as={Button}
                  onSelect={() => handleSelect(50)}
                  className="d-flex fw-bold"
                >
                  50
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </div>

      <div>
        {orders.length > 0 ? (
          <>
            <OrdersTable
              data={filtredOrders}
              RenderComponent={OrderRow}
              title="Órdenes'"
              pageLimit={5}
              dataLimit={dataLimit}
            />
          </>
        ) : (
          <h1>No hay ordenes por mostrar</h1>
        )}
      </div>
    </>
  );
};

export default Orders;
