import React from 'react';
import Item from './Item';

const ItemList = ({products}) => {
    return(
        <div className="d-flex flex-wrap justify-content-center">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;