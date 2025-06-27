import React,{Fragment} from 'react'
import './navbarestilo.css'
import Fronthersact from "../assets/Fronthersact.png";
const Navbar = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row navbar align-items-center">
          <div className="col-md mt-2"> 
            <img src={Fronthersact} alt="logo" className='logo'/>
          </div>
          <div className="col-md mt-2">
            <ul className='d-flex list-unstyled menu'>
              <li className='inicio'><a href="" className='text-reset'><b>Inicio</b></a> </li>
              <li ><a href="" className='text-reset'>¿Quienes Somos?</a></li>
              <li ><a href="" className='text-reset'>Servicios</a></li>
              <li ><a href="" className='text-reset'>Contactos</a></li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar;