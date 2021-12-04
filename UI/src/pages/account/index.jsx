import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faCartArrowDown,
  faChartPie,
  faChevronDown,
  faClipboard,
  faCommentDots,
  faFileAlt,
  faPlus,
  faRocket,
  faStore,
  faHome,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Button,
  Dropdown,
  Container
} from "@themesberg/react-bootstrap";
import { ChoosePhotoWidget, ProfileCardWidget } from "../../components/Widgets";
import UserInfo from "../../components/forms/UserInfo";
import Footer from "../../components/footer/Index";

import Profile3 from "../../assets/img/team/profile-picture-3.jpg";
import { Routes } from "../../routes";

const Account = (props) => {
  return (
    <>
      <section
        className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 bg-primary bg-gradient"
        id="home"
      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <Button
                  href={Routes.DashboardOverview.path}
                  variant="outline-secondary"
                  className="me-2"
                >
                  <FontAwesomeIcon icon={faHome} className="me-1" /> Volver a mi
                  dashboard
                </Button>
                {/* <Dropdown>
                  <Dropdown.Toggle
                    as={Button}
                    variant="secondary"
                    className="text-dark me-2"
                    href={Routes.DashboardOverview.path}
                  >
                    <FontAwesomeIcon icon={faHome} className="me-2" />
                    <span>Volver a mi dashboard</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
                    <Dropdown.Item>
                      <FontAwesomeIcon icon={faFileAlt} className="me-2" />{" "}
                      Document
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <FontAwesomeIcon icon={faCommentDots} className="me-2" />{" "}
                      Message
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <FontAwesomeIcon icon={faBoxOpen} className="me-2" />{" "}
                      Product
                    </Dropdown.Item>

                    <Dropdown.Divider />

                    <Dropdown.Item>
                      <FontAwesomeIcon
                        icon={faRocket}
                        className="text-danger me-2"
                      />{" "}
                      Subscription Plan
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}

                <div className="d-flex">
                  <Button
                    href={Routes.DashboardOverview.path}
                    variant="danger"
                    className="me-2"
                  >
                    Salir{" "}
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-1" />
                  </Button>
                </div>
              </div>

              <Row>
                <Col xs={12} xl={8}>
                  <UserInfo />
                </Col>

                <Col xs={12} xl={4}>
                  <Row>
                    <Col xs={12}>
                      <ProfileCardWidget />
                    </Col>
                    <Col xs={12}>
                      <ChoosePhotoWidget
                        title="Selecciona tu foto de perfil o el logo de tu empresa"
                        photo={Profile3}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Account;
