import React, { Fragment } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./Servicio.css";
const Servicio = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid">
        <div className="row fondo">
          {/*Cards de paginas web*/}
          <div className="row justify-content-center mt-5">
            <div className="row justify-content-center mt-5">
              <div className="col-md-12">
                <h1>Páginas web personalizadas</h1>
                <p>
                  Diseño y desarrollo de páginas web modernas, rápidas y
                  adaptadas a tu marca.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="cardb">
                <h5>
                  <b>PAQUETE BASICO</b>
                </h5>
                <h2>
                  <b>$50</b>
                </h2>
                <ul className="list-unstyled">
                  <li>- 1 pestaña</li>
                  <li>- Responsive</li>
                </ul>
                <div className="bot d-flex justify-content-center">
                  <button className="btn btn-primary">Solicitar Paquete</button>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="cardn">
                <h5>
                  <b>PAQUETE NORMAL</b>
                </h5>
                <h2>
                  <b>$80</b>
                </h2>
                <ul className="list-unstyled">
                  <li>- 3 pestañas (inicio / contacto / servicio)</li>
                  <li>- Responsive</li>
                  <li>- Botones redes sociales</li>
                </ul>
                <div className="bot d-flex justify-content-center">
                  <button className="btn btn-primary">Solicitar Paquete</button>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="cardp">
                <h5>
                  <b>PAQUETE PREMIUM</b>
                </h5>
                <h2>
                  <b>$130</b>
                </h2>
                <ul className="list-unstyled">
                  <li>- 5 pestañas</li>
                  <li>- Responsive</li>
                  <li>- Botones redes sociales</li>
                  <li>
                    - Mensajes Personalizados en los botones de redes sociales
                  </li>
                </ul>
                <div className="bot d-flex justify-content-center">
                  <button className="btn btn-primary">Solicitar Paquete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Servicio;
