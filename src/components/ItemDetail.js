import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return (
        <article className="card mt-5 p-4 shadow" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <header className="card-header text-center">
                <h2>{name}</h2>
            </header>
            <picture className="text-center mt-3">
                <img src={img} alt={name} className="img-fluid" style={{ maxHeight: '300px' }}/>
            </picture>
            <div className="card-body text-center">
                <p className="card-text text-muted">Categoría: {category}</p>
                <p className="card-text">{description}</p>
                <h3 className="card-text text-primary">Precio: ${price}</h3>
            </div>
            <footer className="card-footer text-center">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail;