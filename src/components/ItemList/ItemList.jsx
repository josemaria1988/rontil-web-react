import React from "react";
import Item from "../Item/Item";
import './ItemList.scss'


const ItemList = ( {productos = []} ) => {

    return (
        <div className="container">
            { productos.map((prod, index) => <Item producto={prod} key={index}/>)}
        </div>
    )
}

export default ItemList