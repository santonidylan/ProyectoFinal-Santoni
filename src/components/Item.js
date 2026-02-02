import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({id, name, img, price, stock}) => {
    return (
        <article className="card m-2" style={{ width: '18rem' }}>
            <header className="card-header">
                <h2 className="card-title text-center">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="card-img-top" />
            </picture>
            <div className="card-body text-center">
                <p className="card-text">Precio: ${price}</p>
                <p className="card-text">Stock disponible: {stock}</p>
            </div>
            <footer className="card-footer text-center">
                {/* Enlace para ver detalle [cite: 36] */}
                <Link to={`/item/${id}`} className="btn btn-primary">Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item;