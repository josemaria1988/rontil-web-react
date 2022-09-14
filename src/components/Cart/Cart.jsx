import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import './Cart.scss'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import DoneIcon from '@mui/icons-material/Done';
import { Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';


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
                    <div className="carrito-vacio-div">
                        <h2>Está Vacío...</h2>
                        <Link className="btn-finalizar-compra" to="/">Ver Productos</Link>
                    </div>
                    :
                    <>
                    <div className="cart-header-div">
                <h3 class="cart-header">Tu Carrito</h3>
           
                         <button onClick={emptyCart} className="btn-borrar-todo">BORRAR TODO</button>
            </div>
                        {cart.map((prod, index) => <div key={index} className="cart-item">
                                <div className="img-box">
                                    <img src={prod.img} alt="producto.img" className="cart-img" />
                                </div>
                                <div className="cart-product-text-box">
                                    <h4 className="cart-product-name">{prod.nombre}</h4>
                                    <p className="cart-product-detail">Cantidad: {prod.cantidad}</p>
                                    <p className="cart-product-detail">Total item: $ {prod.precio * prod.cantidad}</p>
                                </div>
                                <button className="btn-borrar-unidad" onClick={() => removeItem(prod.id)}><ClearIcon/></button>
                        </div>
                        )
                        }
                        <hr/>
                        <div className="cart-finish-box">
                            <span className="total-carrito">
                                Total: $ {cartTotal()}
                            </span>
                            <button onClick={handleFinalizar} className="btn-finalizar-compra">FINALIZAR COMPRA -<CheckCircleSharpIcon/></button>
                        </div>

                    </>
            }

        </div>
    )
}

export default Cart