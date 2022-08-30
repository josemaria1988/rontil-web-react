
import React from "react";
import './SingleItem.scss'


const Item = ({ producto }) => {

   return (
    <div>
        <h2>{producto.nombre}</h2>
        <h3>{producto.precio}</h3>
    </div>
   )
}

export default Item