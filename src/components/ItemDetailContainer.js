import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/products'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)
    getProductById(itemId)
      .then(data => setProduct(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [itemId])

  if (loading) return (
    <div className="container">
      <div className="loader-wrap"><div className="loader" /><p>Cargando producto...</p></div>
    </div>
  )

  if (!product) return (
    <div className="container">
      <div className="empty-state"><span>🔍</span><p>El producto no existe.</p></div>
    </div>
  )

  return <ItemDetail {...product} />
}

export default ItemDetailContainer