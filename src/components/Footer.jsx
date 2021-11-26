import React from "react";
import moment from "moment-timezone";
import {
  Row,
  Col,
  Card,
  OverlayTrigger,
  Tooltip,
  Image,
  Button,
  Navbar,
  Container
} from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faDownload,
  faRocket
} from "@fortawesome/free-solid-svg-icons";
import BS5Logo from "../assets/img/technologies/bootstrap-5-logo.svg";
import ReactLogo from "../assets/img/technologies/react-logo.svg";
import LaravelLogo from "../assets/img/technologies/laravel-logo.svg";
import GitHubButton from "react-github-btn";
import { Link } from "react-router-dom";
import { Routes } from "../routes";

import truck_logo from "../assets/img/truck_logo.png";

const Footer = (props) => {
  const currentYear = moment().get("year");
  const showSettings = props.showSettings;

  const toggleSettings = (toggle) => {
    props.toggleSettings(toggle);
  };

  return (
    <div>
      {showSettings ? (
        <Card className="theme-settings">
          <Card.Body className="pt-4">
            <Button
              className="theme-settings-close"
              variant="close"
              size="sm"
              aria-label="Close"
              onClick={() => {
                toggleSettings(false);
              }}
            />
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="m-0 mb-1 me-3 fs-7">
                Made with open source{" "}
                <span role="img" aria-label="gratitude">
                  💙
                </span>
              </p>
              <GitHubButton
                href="https://github.com/themesberg/volt-react-dashboard"
                data-size="large"
                data-show-count="true"
                aria-label="Star themesberg/volt-react-dashboard on GitHub"
              >
                Star
              </GitHubButton>
            </div>
            <Button
              href="https://themesberg.com/product/dashboard/volt-react"
              target="_blank"
              variant="primary"
              className="mb-3 w-100"
            >
              <FontAwesomeIcon icon={faDownload} className="me-1" /> Download
            </Button>
            <p className="fs-7 text-gray-700 text-center">
              Available in the following technologies:
            </p>
            <div className="d-flex justify-content-center">
              <Card.Link
                href="https://themesberg.com/product/admin-dashboard/volt-bootstrap-5-dashboard"
                target="_blank"
              >
                <OverlayTrigger
                  placement="top"
                  trigger={["hover", "focus"]}
                  overlay={
                    <Tooltip>
                      Bootstrap 5 · The most popular HTML, CSS, and JS library
                      in the world.
                    </Tooltip>
                  }
                >
                  <Image src={BS5Logo} className="image image-xs" />
                </OverlayTrigger>
              </Card.Link>

              <Card.Link
                href="https://themesberg.com/product/dashboard/volt-react"
                target="_blank"
              >
                <OverlayTrigger
                  placement="top"
                  trigger={["hover", "focus"]}
                  overlay={
                    <Tooltip>
                      React · A JavaScript library for building user interfaces.
                    </Tooltip>
                  }
                >
                  <Image src={ReactLogo} className="image image-xs" />
                </OverlayTrigger>
              </Card.Link>

              <Card.Link
                href="https://themesberg.com/product/laravel/volt-admin-dashboard-template"
                target="_blank"
              >
                <OverlayTrigger
                  placement="top"
                  trigger={["hover", "focus"]}
                  overlay={
                    <Tooltip>
                      Laravel · Most popular PHP framework in the world.
                    </Tooltip>
                  }
                >
                  <Image src={LaravelLogo} className="image image-xs" />
                </OverlayTrigger>
              </Card.Link>
            </div>
          </Card.Body>
        </Card>
      ) : (
        <Card
          className="theme-settings theme-settings-expand"
          onClick={() => {
            toggleSettings(true);
          }}
        >
          <Card.Body className="p-3 py-2">
            <span className="fw-bold h6">
              <FontAwesomeIcon icon={faCogs} className="me-1 fs-7" /> Settings
            </span>
          </Card.Body>
        </Card>
      )}
      <footer className="footer py-6 bg-dark text-white bg-gradient">
        <Container>
          <Row>
            <Col md={4}>
              <Navbar.Brand
                as={Link}
                to="#home"
                className="me-lg-3 mb-3 d-flex align-items-center"
              >
                <Image src={truck_logo} />
                <span className="ms-2 brand-text">Tripool</span>
              </Navbar.Brand>
              <p>
                Nuestro objetivo es brindar el mejor servicio de logística para
                sus necesidades de transporte.
              </p>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Información</span>
              <ul className="links-vertical mt-2">
                <li>
                  <Card.Link target="_blank" href="/">
                    Tarifas
                  </Card.Link>
                </li>
                <li>
                  <Card.Link target="_blank" href="/">
                    Cobertura geográfica
                  </Card.Link>
                </li>
                <li>
                  <Card.Link
                    target="_blank"
                    href="https://themesberg.com/about"
                  >
                    Horarios de atención
                  </Card.Link>
                </li>
                <li>
                  <Card.Link
                    target="_blank"
                    href="https://themesberg.com/contact"
                  >
                    Contáctenos
                  </Card.Link>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Enlaces de interés</span>
              <ul className="links-vertical mt-2">
                <li>
                  <Card.Link
                    as={Link}
                    to={Routes.DocsQuickStart.path}
                    target="_blank"
                  >
                    Preguntas frecuentes
                  </Card.Link>
                </li>
                <li>
                  <Card.Link
                    as={Link}
                    to={Routes.DocsChangelog.path}
                    target="_blank"
                  >
                    Sobre nosotros
                  </Card.Link>
                </li>
                <li>
                  <Card.Link
                    target="_blank"
                    href="https://themesberg.com/licensing"
                  >
                    Términos y condiciones de servicio
                  </Card.Link>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={4} className="mb-5 mb-lg-0">
              {/* <span className="h5 mb-3 d-block">Subscribe</span>
              <form action="#">
                <div className="form-row mb-2">
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control mb-2"
                      placeholder="example@company.com"
                      name="email"
                      aria-label="Subscribe form"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-secondary text-dark shadow-soft btn-block"
                      data-loading-text="Sending"
                    >
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              </form> */}
            </Col>
          </Row>
          <hr className="bg-gray my-5" />
          <Row>
            <Col className="d-flex justify-content-center justify-content-lg-between p-4">
              {/* <Card.Link
                href="https://themesberg.com"
                target="_blank"
                className="d-flex justify-content-center"
              >
                <Image
                  src={ThemesbergLogo}
                  height={35}
                  className="d-block mx-auto mb-3"
                  alt="Themesberg Logo"
                />
              </Card.Link> */}
              <div className="text-left" role="contentinfo">
                <p className="font-weight-normal font-small mb-0 ">
                  Copyright © Tripool SAS 2021. Todos los derechos reservados.
                </p>
              </div>
              <div className="text-right" role="contentinfo">
                <p className="text-muted font-small m-0 ">
                  Consulte nuestra{" "}
                  <Card.Link className="text-white" href="#">
                    Política de Privacidad
                  </Card.Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
