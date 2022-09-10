import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import './Cart.scss'


const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useCartContext();

    return (
        <div className="cart-container">
            {cart.map((prod, index) => <div key={index} className="cart-item">
                <img src={prod.img} alt="producto.img" className="cart-img" />
                <div className="cart-desc">
                    <div>
                        <h4 className="cart-product-name">{prod.nombre}</h4>
                        <p className="cart-product-detail">Cantidad: {prod.cantidad}</p>
                        <p className="cart-product-detail">Total item: $ {prod.precio * prod.cantidad}</p>
                    </div>
                    <button className="btn-borrar-unidad" onClick={() => removeItem(prod.id)}>Borrar Item</button>
                </div>
            </div>
            )
            }
            <div className="cart-finish-box">
                <span className="total-carrito">
                    Total: $ {cartTotal()}
                </span>
                <button className="btn-finalizar-compra">FINALIZAR COMPRA</button>
                <button onClick={emptyCart} className="btn-borrar-todo">BORRAR TODO</button>
            </div>
        </div>
    )
}

export default Cart