import React from 'react';
import SingleItem from '../SingleItem/SingleItem.jsx'

const ItemDetail = ({producto}) => {

    return (
        <div className="container">
            { producto.map((item) => <SingleItem producto={item} key={item.id}/>)}
        </div>
    )
}

export default ItemDetail