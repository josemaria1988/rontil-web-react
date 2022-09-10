import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import './Cart.scss'


const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useCartContext();

    return(
        <div className="cart-container">
                {cart.map((prod, index) => <div key={index} className="cart-item">
                    <img src={prod.img} alt="producto.img" className="cart-img" />
                    <div className="cart-desc">
                        <h4 className="cart-product-name">{prod.nombre}</h4>
                        <p>Precio: {prod.precio}</p>
                        <p>Cantidad: {prod.cantidad}</p>
                        
                    </div>
                </div>

                
                )
                }
        </div>
    )
}

export default Cart