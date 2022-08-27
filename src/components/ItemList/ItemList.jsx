import React from "react";
import Item from "../Item/Item";
import './ItemList.scss'


const ItemList = ( {productos = []} ) => {

    return (
        <div className="container">
            { productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
        </div>
    )
}

export default ItemList