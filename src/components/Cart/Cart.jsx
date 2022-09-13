import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import './Cart.scss'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import DoneIcon from '@mui/icons-material/Done';
import { Link } from 'react-router-dom';


const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useCartContext();

    const handleFinalizar = () => {

        const MySwal = withReactContent(Swal)
        if (cart.length !== 0) {
            return MySwal.fire({
                title: <p>Procesando pago</p>,
                timer: 1500,
                didOpen: () => {
                    MySwal.showLoading()
                },
            }).then(() => {
                return MySwal.fire(

                    <p>Compra realizada con éxito! <DoneIcon /></p>,
                    emptyCart()
                )
            })
        }
    }


    return (

        <div className="cart-container">

            {
                cart.length === 0 ?
                    <>
                        <h2>Carrito Vacío...</h2>
                        <Link className="btn-finalizar-compra" to="/">Andá a comprar cielito mío</Link>
                    </>
                    :
                    <>
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
                            <button onClick={handleFinalizar} className="btn-finalizar-compra">FINALIZAR COMPRA</button>
                            <button onClick={emptyCart} className="btn-borrar-todo">BORRAR TODO</button>
                        </div>

                    </>
            }
        </div>
    )
}

export default Cart