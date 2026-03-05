import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'

const Cart = () => {
  const { cartItems, clearCart, totalPrice, totalQuantity } = useCart()

  if (cartItems.length === 0) return (
    <div className="container">
      <div className="empty-state" style={{ marginTop: '4rem' }}>
        <span>🛒</span>
        <p>Tu carrito está vacío.</p>
        <Link to="/" className="btn btn-primary" style={{ width: 'auto', marginTop: '1rem' }}>Ver productos</Link>
      </div>
    </div>
  )

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-header__title">Tu <span>carrito</span></h1>
        <p className="page-header__sub">{totalQuantity} unidades</p>
      </div>
      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map(item => <CartItem key={item.id} {...item} />)}
        </div>
        <aside className="cart-summary">
          <h2 className="cart-summary__title">Resumen</h2>
          <div className="cart-summary__rows">
            {cartItems.map(item => (
              <div key={item.id} className="cart-summary__row">
                <span>{item.name} x{item.quantity}</span>
                <span>${(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="cart-summary__total">
            <span>Total</span>
            <span>${totalPrice.toLocaleString()}</span>
          </div>
          <Link to="/checkout" className="btn btn-primary" style={{ marginTop: '1rem' }}>Confirmar compra →</Link>
          <button className="btn btn-danger" style={{ marginTop: '0.5rem', width: '100%' }} onClick={clearCart}>Vaciar carrito</button>
        </aside>
      </div>
    </div>
  )
}

export default Cart