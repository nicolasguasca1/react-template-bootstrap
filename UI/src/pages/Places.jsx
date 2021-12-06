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

import { PlacesTable } from "../components/Tables";
import { PlaceRow } from "../components/Tables";
import places from "../data/places.json";

import { Routes } from "../routes";

const approved = ["Todas", "Pick-up", "Delivery"];
const pagination = [10, 25, 50];

const Places = (props) => {
  const [dataLimit, setDataLimit] = useState(10);
  const [filtredPlaces, setfiltredPlaces] = useState(places);

  const [active, setActive] = useState(approved[0]);
  const [paginated, setPaginated] = useState(pagination[0]);

  const filterPlace = (placeApproved) => {
    let filtredList = places.filter(
      (place) => place.approved === placeApproved
    );
    return filtredList;
  };

  const handlePlaces = (e) => {
    console.log(e);
    let approvedPlace = e;
    approvedPlace !== "Todas"
      ? setfiltredPlaces(filterPlace(approvedPlace))
      : setfiltredPlaces(places);
    console.log(filtredPlaces);
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
            <Breadcrumb.Item active>Puntos de distribución</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Puntos de distribución</h4>
          <p className="mb-0">
            Configure aquí los lugares habilitados para prestar servicio
            logístico.
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
                {approved.map((approved) => (
                  <Dropdown.Item
                    className="d-flex fw-bold"
                    key={approved}
                    active={active === approved}
                    onClick={() => {
                      setActive(approved);
                      handlePlaces(approved);
                    }}
                  >
                    {approved}{" "}
                    {active === approved && (
                      <span className="icon icon-small ms-auto">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                    )}
                  </Dropdown.Item>
                ))}
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
                <Dropdown.Item className="fw-bold text-dark" disabled>
                  Mostrar
                </Dropdown.Item>
                {pagination.map((pagination) => (
                  <Dropdown.Item
                    className="d-flex fw-bold"
                    key={pagination}
                    active={paginated === pagination}
                    onSelect={() => {
                      setPaginated(pagination);
                      handleSelect(pagination);
                    }}
                  >
                    {pagination}{" "}
                    {paginated === pagination && (
                      <span className="icon icon-small ms-auto">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                    )}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </div>

      <div>
        {filtredPlaces.length > 0 ? (
          <>
            <PlacesTable
              data={filtredPlaces}
              RenderComponent={PlaceRow}
              title="Lugares'"
              pageLimit={5}
              dataLimit={dataLimit}
            />
          </>
        ) : (
          <h1>No hay lugares por mostrar</h1>
        )}
      </div>
    </>
  );
};

export default Places;
