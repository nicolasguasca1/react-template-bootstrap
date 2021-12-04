import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Image,
  Button,
  Container
} from "@themesberg/react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { Routes } from "../../routes";
import ErrorImage from "../../assets/img/illustrations/500.svg";

const ServerError = () => {
  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };
  return (
    <main>
      <section className="vh-100 d-flex align-items-center justify-content-center">
        <Container>
          <Row className="align-items-center">
            <Col
              xs={12}
              lg={5}
              className="order-2 order-lg-1 text-center text-lg-left"
            >
              <h1 className="text-primary mt-5">
                Hay algo en esta ruta que verdaderamente{" "}
                <span className="fw-bolder">no funciona.</span>
              </h1>
              <p className="lead my-4">
                Aprovecha esta pausa para estirarte y descansar. Nosotros
                estaremos trabajando para solucionar este error lo más pronto
                posible.
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
            </Col>
            <Col
              xs={12}
              lg={7}
              className="order-1 order-lg-2 text-center d-flex align-items-center justify-content-center"
            >
              <Image src={ErrorImage} className="img-fluid w-75" />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default ServerError;
