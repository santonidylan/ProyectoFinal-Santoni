import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../services/products'
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    setError(null)
    getProducts(categoryId)
      .then(data => setProducts(data))
      .catch(err => { console.error(err); setError('No se pudieron cargar los productos.') })
      .finally(() => setLoading(false))
  }, [categoryId])

  if (loading) return (
    <div className="container">
      <div className="loader-wrap"><div className="loader" /><p>Cargando productos...</p></div>
    </div>
  )

  if (error) return (
    <div className="container">
      <div className="empty-state"><span>⚠️</span><p>{error}</p></div>
    </div>
  )

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-header__title">
          {categoryId ? <><span>{categoryId}</span></> : <>Todos los <span>productos</span></>}
        </h1>
        <p className="page-header__sub">{products.length} productos encontrados</p>
      </div>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer