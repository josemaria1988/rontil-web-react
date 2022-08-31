import React from 'react';
import SingleItem from '../SingleItem/SingleItem.jsx'
import './ItemDetail.scss'

const ItemDetail = ({producto}) => {

    return (
        <div className="container-detail">
            { producto.map((item) => <SingleItem producto={item} key={item.id}/>)}
        </div>
    )
}

export default ItemDetail