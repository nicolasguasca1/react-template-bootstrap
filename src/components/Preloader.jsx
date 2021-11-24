import React from "react";
import { Image } from "@themesberg/react-bootstrap";

// import ReactLogo from "../assets/img/technologies/react-logo-transparent.svg";
import truck_logo from "../assets/img/truck_logo.png";

const Preloader = (props) => {
  const { show } = props;

  return (
    <div
      className={`preloader bg-dark flex-column justify-content-center align-items-center ${
        show ? "" : "show"
      }`}
    >
      <Image
        className="loader-element animate__animated animate__jackInTheBox"
        src={truck_logo}
        height={40}
      />
    </div>
  );
};

export default Preloader;
