import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEnvelope,
  faUnlockAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  FormCheck,
  Container,
  InputGroup
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";

import { Routes } from "../routes";
import CommunityImage from "../assets/img/illustrations/community-people-friends-group-svgrepo-com.svg";

const API_DB = process.env.API;

const About = () => {
  return (
    <main
      style={{
        backgroundImage: `url(${CommunityImage})`
      }}
    >
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link as={Link} to="/" className="text-secondary">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2 " /> Volver al
              inicio
            </Card.Link>
          </p>
          <Row className="justify-content-center form-bg-image">
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Sobre nosotros</h3>
                </div>
                <Card>
                  <Card.Body>
                    <article>
                      <h1 className="h2" id="overview">
                        Ofrecemos a tu negocio:{" "}
                      </h1>
                      <p className="fs-5 fw-light">
                        Una forma rápida de ejecutar tus pedidos.
                      </p>

                      <p>
                        Tripool ofrece una herramienta de gestión de pedidos que
                        te permite agilizar las entregas. Si tu compañía cuenta
                        con cierta cantidad de vehículos, y se encarga de
                        realizar la recogida de productos de un cliente, y
                        llevarlos a donde este cliente le indique, nuestra
                        plataforma puede automatizar el proceso de generación de
                        ordenes y optimizar los tiempos de gestión.
                      </p>
                      <p>Nuestros ventajas competivias son las siguientes:</p>
                      <ul className="docs-list">
                        <li>
                          Manejo de base de datos en la nube a traves de nuestra{" "}
                          <Card.Link href={API_DB} target="_blank">
                            API
                          </Card.Link>
                        </li>
                        <li>
                          Segmentación de clientes a través de nuestro sistema
                          de{" "}
                          <Card.Link href={Routes.Rates.path} target="_blank">
                            facturación.
                          </Card.Link>
                        </li>
                        <li>
                          Manejo de solicitudes en tiempo real con el{" "}
                          <Card.Link href={Routes.Orders.path} target="_blank">
                            Sistema coordinado
                          </Card.Link>
                        </li>
                      </ul>

                      {/* <h2 id="getting-support">Getting support</h2>
              <p>
                We offer 6 months of support by default for each purchased
                template. Please{" "}
                <Card.Link
                  href="https://themesberg.com/contact"
                  target="_blank"
                >
                  contact us
                </Card.Link>{" "}
                and we&rsquo;ll get back to you in no time!
              </p>

              <h2 id="community">Community</h2>
              <ul className="docs-list">
                <li>
                  Follow{" "}
                  <Card.Link
                    href="https://twitter.com/themesberg"
                    target="_blank"
                  >
                    @themesberg on Twitter
                  </Card.Link>
                  .
                </li>
                <li>
                  Follow{" "}
                  <Card.Link
                    href="https://facebook.com/themesberg"
                    target="_blank"
                  >
                    Themesberg on Facebook
                  </Card.Link>
                  .
                </li>
                <li>
                  Read and subscribe to{" "}
                  <Card.Link href="https://themesberg.com/blog" target="_blank">
                    The Official Themesberg Blog
                  </Card.Link>
                  .
                </li>
                <li>
                  Follow latest open source projects on our{" "}
                  <Card.Link
                    href="https://github.com/themesberg"
                    target="_blank"
                  >
                    Github Page
                  </Card.Link>
                </li>
              </ul> */}
                    </article>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default About;
