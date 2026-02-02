import React, { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex align-items-center mb-2">
                <button className="btn btn-outline-secondary" onClick={decrement}>-</button>
                <h4 className="mx-3 m-0">{quantity}</h4>
                <button className="btn btn-outline-secondary" onClick={increment}>+</button>
            </div>
            <div>
                <button className="btn btn-primary" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;