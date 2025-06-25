import React,{Fragment} from 'react'
import './navbarestilo.css'

const Navbar = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row Titulo">
          <div className="col-sm-3 caja1 mb-5 mt-5">titulo</div>
          <div className="col-md-6 caja2">titulo</div>
          <div className="col-md-9 caja3">titulo</div>
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar;