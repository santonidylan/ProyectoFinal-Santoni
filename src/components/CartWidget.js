import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const CartWidget = () => {
  const { totalQuantity } = useCart()
  return (
    <Link to="/cart" className="cart-widget">
      <span className="cart-widget__icon">🛒</span>
      <span>Carrito</span>
      <span className={`cart-widget__count ${totalQuantity > 0 ? 'has-items' : ''}`}>
        {totalQuantity}
      </span>
    </Link>
  )
}

export default CartWidget