import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price, stock, category }) => {
  return (
    <article className="item-card">
      <Link to={`/item/${id}`} className="item-card__img-wrap">
        <img src={img} alt={name} className="item-card__img" />
      </Link>
      <div className="item-card__body">
        <span className="item-card__category">{category}</span>
        <h2 className="item-card__name">{name}</h2>
        <p className="item-card__price">${price.toLocaleString()}</p>
        {stock === 0
          ? <p className="item-card__stock" style={{ color: 'var(--danger)' }}>Sin stock</p>
          : <p className="item-card__stock">{stock} disponibles</p>
        }
      </div>
      <footer className="item-card__footer">
        <Link to={`/item/${id}`} className="btn btn-primary">Ver detalle →</Link>
      </footer>
    </article>
  )
}

export default Item