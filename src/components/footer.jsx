import React, { Fragment } from "react";
import "./footer.css";
import Fronthersact from "../assets/Fronthersact.png";
const Footer = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row footer pt-5">
          <div className="col-md-3">
            <img src={Fronthersact} alt="logo" className="logo ms-3" />
          </div>
          <div className="col-md-3">
            <h3 className="titulo">
              <b>Menú</b>
            </h3>
            <ul>
              <li>Inicio</li>
              <li>¿Quienes Somos?</li>
              <li>Servicios</li>
              <li>Contáctanos</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="titulo">
              <b>Ubicaciones</b>
            </h3>
            <ul>
              <li>Villaflora</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="titulo">
              <b>Siguenos</b>
            </h3>
           <a href="" className="cursor-pointer text-reset"><i className="bi bi-facebook fs-3"></i></a>
           <a href="" className="cursor-pointer text-reset"><i className="bi bi-instagram fs-3 ms-4"></i></a> 
           <a href="" className="cursor-pointer text-reset"><i className="bi bi-whatsapp fs-3 ms-4"></i></a> 
          </div>
          <div className="col-md fronthers mt-5 mb-5">
            &copy;FRONTHERS - 2025
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
