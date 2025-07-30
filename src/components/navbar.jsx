import React, { Fragment } from "react";
import "./navbarestilo.css";
import Fronthersact from "../assets/Fronthersact.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row fixed-top navbar align-items-center">
          <div className="col-6 col-md-3 d-flex justify-content-center justify-content-md-start mt-2">
            <img src={Fronthersact} alt="logo" className="logo" />
          </div>
          <div className="col-md mt-2">
            <ul className='d-flex list-unstyled menu'>
              <li className='inicio'><Link to={'/'} className='text-reset'><b>Inicio</b></Link> </li>
              <li ><Link to= {'/Somos'} className='text-reset'>¿Quienes Somos?</Link></li>
              <li ><Link to={'/servicio'} className='text-reset'>Servicios</Link></li>
              <li ><Link to={'/Contactos'} className='text-reset'>Contactos</Link></li>
          <div className="col-6 col-md-9 d-flex justify-content-end mt-2">
            <ul className="d-none d-md-flex list-unstyled menu m-0">
              <li className="inicio">
                <a href="#" className="text-reset">
                  <b>Inicio</b>
                </a>
              </li>
              <li>
                <a href="#" className="text-reset">
                  ¿Quiénes Somos?
                </a>
              </li>
              <li>
                <a href="#" className="text-reset">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="text-reset">
                  Contactos
                </a>
              </li>
            </ul>

            {/* Menú hamburguesa para móviles */}
            <div className="d-md-none">
              <button
                className="btn btn-outline-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mobileMenu"
                aria-expanded="false"
                aria-controls="mobileMenu"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Menú colapsable en móviles */}
        <div
          className="collapse d-md-none bg-black text-center pt-3"
          id="mobileMenu"
        >
          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-reset d-block py-2">
                <b>Inicio</b>
              </a>
            </li>
            <li>
              <a href="#" className="text-reset d-block py-2">
                ¿Quiénes Somos?
              </a>
            </li>
            <li>
              <a href="#" className="text-reset d-block py-2">
                Servicios
              </a>
            </li>
            <li>
              <a href="#" className="text-reset d-block py-2">
                Contactos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
