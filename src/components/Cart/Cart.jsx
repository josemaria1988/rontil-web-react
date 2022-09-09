import React from 'react';
import {useParams} from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';


const Cart = () => {

    const { cart } = useCartContext()

    return(
        <div>
            <div className="container">
                {cart.map((prod, index) => <div key={index} className="card">
                    <img src={prod.img} alt="producto.img" />
                    <div className="contenido-card">
                        <h4 className="titulo-card">{prod.nombre}</h4>
                        <p>Precio: {prod.precio}</p>
                        
                    </div>
                </div>

                
                )
                }
        </div>
        </div>
    )
}

export default Cart