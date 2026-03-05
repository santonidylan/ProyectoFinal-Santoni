import Item from './Item'

const ItemList = ({ products }) => {
  if (products.length === 0) return (
    <div className="empty-state">
      <span>📦</span>
      <p>No hay productos en esta categoría.</p>
    </div>
  )
  return (
    <div className="product-grid">
      {products.map(product => <Item key={product.id} {...product} />)}
    </div>
  )
}

export default ItemList