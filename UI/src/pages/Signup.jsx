import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEnvelope,
  faUser,
  faUnlockAlt,
  faIdBadge
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
import BgImage from "../assets/img/illustrations/people-signup.svg";
import axios from "axios";

const API_DB = process.env.API_DB;

const Signup = () => {
  const [inputs, setInputs] = useState({
    email: "",
    identification_number: "",
    identification_type: "",
    username: "",
    password: ""
  });
  const handleChange = (e) => {
    console.log(e.target.value);
    // const email = e.target.email.value;
    // const username = event.target.username;
    // const value = event.target.value;
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
    console.log(inputs);
    console.log(API_DB);
  };
  const handleSubmit = async (e) => {
    // const options = {
    //   url: "http://localhost:8080/api/auth/signup",
    //   method: "POST",
    //   headers: {
    //     'Content-Type': "application/json",
    //   },
    //   data: {
    //     email: email,
    //     username: username,
    //     password: password
    //   }
    // };

    const response = await axios
      .post(
        `/api/auth/signup`,

        inputs
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main style={{ backgroundImage: `url(${BgImage})` }}>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link as={Link} to="/" className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Volver al
              inicio
            </Card.Link>
          </p>
          <Row className="justify-content-center form-bg-image">
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Crear cuenta de usuario</h3>
                </div>
                <Form onSubmit={handleSubmit} className="mt-4">
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Correo electrónico</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control
                        autoFocus
                        required
                        name="email"
                        type="email"
                        placeholder="micorreo@ejemplo.com"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="identification_number" className="mb-4">
                    <Form.Label>Número de identificación</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faIdBadge} />
                      </InputGroup.Text>
                      <Form.Control
                        autoFocus
                        required
                        // type="email"
                        name="identification_number"
                        placeholder="De la persona natural o jurídica"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group name="identification_type" className="mb-3">
                    <Form.Label>Tipo de identificación</Form.Label>
                    <Form.Select
                      multiple
                      name="identification_type"
                      onChange={handleChange}
                    >
                      <option defaultValue>C.C</option>
                      <option>PAS</option>
                      <option>C.E</option>
                      <option>NIT</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group id="username" className="mb-4">
                    <Form.Label>Usuario</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text>
                      <Form.Control
                        autoFocus
                        required
                        type="username"
                        name="username"
                        placeholder="miusuario"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="password" className="mb-4">
                    <Form.Label>Contraseña</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control
                        required
                        type="password"
                        name="password"
                        placeholder="Micontraseña123."
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="confirmPassword" className="mb-4">
                    <Form.Label>Confirmación de contraseña</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Confirma tu contraseña"
                      />
                    </InputGroup>
                  </Form.Group>
                  <FormCheck type="checkbox" className="d-flex mb-4">
                    <FormCheck.Input required id="terms" className="me-2" />
                    <FormCheck.Label required htmlFor="terms">
                      Acepto los{" "}
                      <u>
                        <Card.Link
                          as={Link}
                          to={Routes.Signin.path}
                          className="fw-bold"
                        >
                          {` terminos y condiciones de
                        servicio`}
                        </Card.Link>{" "}
                      </u>
                      y conozco la{" "}
                      <u>
                        <Link
                          as={Link}
                          to={Routes.Signin.path}
                          className="fw-bold"
                        >
                          {`política de privacidad.`}
                        </Link>
                      </u>
                    </FormCheck.Label>
                  </FormCheck>

                  <Button
                    variant="primary"
                    method="post"
                    type="submit"
                    className="w-100"
                    // to="/api/auth/signup"
                  >
                    Registrarme
                  </Button>
                </Form>

                {/* <div className="mt-3 mb-4 text-center">
                  <span className="fw-normal">ó</span>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <Button
                    variant="outline-light"
                    className="btn-icon-only btn-pill text-facebook me-2"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button>
                  <Button
                    variant="outline-light"
                    className="btn-icon-only btn-pill text-twitter me-2"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button>
                  <Button
                    variant="outline-light"
                    className="btn-icon-only btn-pil text-dark"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </div> */}
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    ¿Ya tienes una cuenta?
                    <Card.Link
                      as={Link}
                      to={Routes.Signin.path}
                      className="fw-bold"
                    >
                      {` Inicia sesión aquí `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Signup;
