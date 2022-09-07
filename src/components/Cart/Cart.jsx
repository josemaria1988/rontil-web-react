import React from 'react';
import {useParams} from 'react-router-dom';

const Cart = () => {

    const itemToCart = useParams()
    console.log(itemToCart)

    return(
        <div>
            <div className="container">
            <div className="card">
                <img src={itemToCart.img} alt="producto.img" />
                <div className="contenido-card">
                    <h4 className="titulo-card">{itemToCart.nombre}</h4>
                    <p>Precio: {itemToCart.precio}</p>
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default Cart