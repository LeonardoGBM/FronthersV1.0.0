import React,{Fragment} from 'react'
import './navbarestilo.css'
import Fronthersact from "../assets/Fronthersact.png";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row navbar align-items-center fixed-top">
          <div className="col-md mt-2"> 
            <img src={Fronthersact} alt="logo" className='logo'/>
          </div>
          <div className="col-md mt-2">
            <ul className='d-flex list-unstyled menu'>
              <li className='inicio'><Link to={'/'} className='text-reset'><b>Inicio</b></Link> </li>
              <li ><Link to= {'/Somos'} className='text-reset'>¿Quienes Somos?</Link></li>
              <li ><Link to={'/servicio'} className='text-reset'>Servicios</Link></li>
              <li ><Link to={'/Contactos'} className='text-reset'>Contactos</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar;