import { useCart } from '../context/CartContext'

const CartItem = ({ id, name, img, price, quantity }) => {
  const { removeItem } = useCart()
  return (
    <div className="cart-item">
      <img src={img} alt={name} className="cart-item__img" />
      <div className="cart-item__info">
        <h3 className="cart-item__name">{name}</h3>
        <p className="cart-item__price">${price.toLocaleString()} c/u</p>
      </div>
      <div className="cart-item__qty">x{quantity}</div>
      <div className="cart-item__subtotal">${(price * quantity).toLocaleString()}</div>
      <button className="btn btn-ghost" onClick={() => removeItem(id)} style={{ color: 'var(--danger)' }}>✕</button>
    </div>
  )
}

export default CartItem