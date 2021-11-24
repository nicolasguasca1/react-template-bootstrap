import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Card,
  Image,
  Button,
  Container
} from "@themesberg/react-bootstrap";

import { Link, useHistory } from "react-router-dom";

import { Routes } from "../../routes";
import NotFoundImage from "../../assets/img/illustrations/404.svg";

const NotFound = () => {
  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };
  return (
    <main>
      <section className="vh-100 d-flex align-items-center justify-content-center">
        <Container>
          <Row>
            <Col
              xs={12}
              className="text-center d-flex align-items-center justify-content-center"
            >
              <div>
                <Card.Link as={Link} to={Routes.DashboardOverview.path}>
                  <Image src={NotFoundImage} className="img-fluid w-75" />
                </Card.Link>
                <h1 className="text-primary mt-5">
                  Página <span className="fw-bolder">no encontrada</span>
                </h1>
                <p className="lead my-4">
                  Ups! Parece que has introducido una ruta que no existe. Si
                  crees que es nuestro error,{" "}
                  <Card.Link as={Link} to="/" className="fw-bold">
                    {` contáctanos.`}
                  </Card.Link>{" "}
                </p>
                <Button
                  as={Link}
                  variant="primary"
                  className="animate-hover"
                  onClick={goToPreviousPath}
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="animate-left-3 me-3 ms-2"
                  />
                  Atrás
                </Button>
                {"    "}
                <Button
                  as={Link}
                  variant="primary"
                  className="animate-hover"
                  to="/"
                >
                  <FontAwesomeIcon
                    icon={faHome}
                    className="animate-left-3 me-3 ms-2"
                  />
                  Ir a inicio
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default NotFound;
