import React from "react";
import Item from "../Item/Item";
import './ItemList.scss'
import { useSearchContext } from '../../Context/SearchContext'


const ItemList = ( {productos = []} ) => {

    const { search } = useSearchContext()

    const resultado = productos.filter((item) => item.nombre.toLowerCase().includes(search.toLowerCase()))


    return (
        <div className="container">
            { resultado.map((prod, index) => <Item producto={prod} key={index}/>)}
        </div>
    )
}

export default ItemList