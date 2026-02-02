import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        {/* Link principal al home */}
        <Link className="navbar-brand fw-bold" to="/">Mi Ecommerce</Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/category/celular" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Celulares</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/tablet" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Tablets</NavLink>
            </li>
          </ul>
          
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;