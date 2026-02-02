import React, { useState, useEffect } from 'react';
import { getProductById } from '../asyncMock';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    // useParams captura el id de la url (ej: /item/1 -> itemId: 1)
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    if(loading) {
        return <div className="text-center mt-5"><h3>Cargando detalle...</h3></div>
    }

    return(
        <div className="ItemDetailContainer">
            { product ? <ItemDetail {...product} /> : <h3>El producto no existe</h3> }
        </div>
    )
}

export default ItemDetailContainer;