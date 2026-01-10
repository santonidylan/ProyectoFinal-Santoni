import React from 'react';
/* IMPORTANTE: 
  Como estamos DENTRO de la carpeta 'components', 
  el CartWidget es nuestro vecino. Usamos './CartWidget' (sin 'components').
*/
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">Mi Ecommerce</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link active" href="#">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Celulares</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Tablets</a></li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;