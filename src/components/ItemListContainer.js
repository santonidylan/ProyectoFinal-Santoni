import React, { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../asyncMock';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    // useParams captura la categoría de la url (ej: /category/celular)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        // Si existe categoryId, filtramos. Si no, traemos todos.
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId]) // [cite: 44] Dependencia importante para recargar al cambiar categoría

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">{greeting} {categoryId && <span>: {categoryId}</span>}</h2>
            { loading ? <h3 className="text-center">Cargando productos...</h3> : <ItemList products={products}/> }
        </div>
    )
}

export default ItemListContainer;