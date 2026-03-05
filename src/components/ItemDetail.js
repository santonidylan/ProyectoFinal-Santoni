import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import ItemCount from './ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const { addItem, isInCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = (quantity) => {
    addItem({ id, name, img, price, stock }, quantity)
    setAdded(true)
  }

  return (
    <div className="item-detail container">
      <div className="item-detail__img-wrap">
        <img src={img} alt={name} className="item-detail__img" />
      </div>
      <div className="item-detail__info">
        <span className="item-card__category">{category}</span>
        <h1 className="item-detail__name">{name}</h1>
        <p className="item-detail__description">{description}</p>
        <p className="item-detail__price">${price.toLocaleString()}</p>
        {stock === 0
          ? <div className="badge badge-danger">Sin stock disponible</div>
          : <p className="item-detail__stock">{stock} unidades disponibles</p>
        }
        <div className="item-detail__actions">
          {!added && !isInCart(id) ? (
            <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
          ) : (
            <div className="added-feedback">
              <p className="added-feedback__msg">✅ ¡Producto agregado al carrito!</p>
              <Link to="/cart" className="btn btn-primary" style={{ width: 'auto' }}>Ver carrito →</Link>
              <Link to="/" className="btn btn-outline">Seguir comprando</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ItemDetail