import { useState } from 'react'

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial)

  const increment = () => { if (quantity < stock) setQuantity(q => q + 1) }
  const decrement = () => { if (quantity > 1) setQuantity(q => q - 1) }

  return (
    <div className="item-count">
      <div className="item-count__controls">
        <button className="btn btn-ghost item-count__btn" onClick={decrement} disabled={quantity <= 1}>−</button>
        <span className="item-count__value">{quantity}</span>
        <button className="btn btn-ghost item-count__btn" onClick={increment} disabled={quantity >= stock}>+</button>
      </div>
      <button className="btn btn-primary" onClick={() => onAdd(quantity)} disabled={stock === 0} style={{ marginTop: '0.75rem' }}>
        {stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
      </button>
    </div>
  )
}

export default ItemCount