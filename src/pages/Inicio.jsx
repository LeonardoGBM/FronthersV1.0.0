import React, { Fragment } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Carrusel from "../components/carrusel";
import "./Inicio.css";
const Inicio = () => {
  let mensaje = "Solicito Paquete";

  const pagoBasico = () => {
    const numero = 593987175379;
    const texto = `${mensaje} Básico\n 1 Pestaña \n Responsive`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };
  return (
    <Fragment>
      <Navbar />
      <Carrusel />
      <div className="container-fluid">
        <div className="row fondo">
          <div className="col-12 descripcion">
            <h1 className="titulo">Una pagína diseñada para tí</h1>
            <p>
              Diseñamos sitios web modernos, visuales y optimizados para mostrar
              tu negocio en internet. <br />
              Adaptados a celulares, integrados con redes sociales y enfocados
              en convertir visitas en clientes.
            </p>
            {/*Video de youtube*/}

            <div className="row justify-content-center ">
              <div className="col-3">
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
                    <button className="btn btn-primary" onClick={pagoBasico}>
                      Pago Basico
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-3">
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
                    <a href="#" className="btn btn-primary">
                      Solicitar Paquete
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-3">
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
                    <li>- Mensajes Personalizados en los botones de redes sociales</li>
                  </ul>
                  <div className="bot d-flex justify-content-center">
                    <button className="btn btn-primary" onClick={pagoBasico}>
                      Pago Basico
                    </button>
                  </div>
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
export default Inicio;
