import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__brand">
        ⚡ Navega<span>Store</span>
      </NavLink>
      <div className="navbar__nav">
        <NavLink to="/" end className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}>Todos</NavLink>
        <NavLink to="/category/celular" className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}>Celulares</NavLink>
        <NavLink to="/category/tablet" className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}>Tablets</NavLink>
        <NavLink to="/category/laptop" className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}>Laptops</NavLink>
        <NavLink to="/category/audio" className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}>Audio</NavLink>
      </div>
      <div className="navbar__right">
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar