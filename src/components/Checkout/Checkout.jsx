import React, { useState } from 'react';
import { useCartContext } from '../../Context/CartContext';
import { addDoc, collection, writeBatch, query, where, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import './Checkout.scss'
import { Link } from 'react-router-dom';
import MoonLoader from 'react-spinners/MoonLoader';
import { useLoginContext } from '../../Context/LoginContext';
import Login from '../Login/Login';
import { useForm } from '../../hooks/useForm'

const Checkout = () => {

    const { cart, cartTotal, emptyCart } = useCartContext()
    const { activeUser } = useLoginContext()
    const { values, handleInputChange } = useForm({
        direccion: '',
    })

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const orden = {
            comprador: activeUser.uid,
            nombre: activeUser.displayName,
            contacto: activeUser.email,
            direccion: values.direccion,
            items: cart,
            total: cartTotal(),
            date: serverTimestamp()
        }

        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'stockProductos')

        const q = query(productosRef, where('id', 'in', cart.map(item => item.id.toString())))

        const productos = await getDocs(q)

        const sinStock = []

        productos.docs.forEach((doc) => {
            const itemInCart = cart.find(item => item.id === doc.id)
            const colorIndex = cart.map(item => item.colorIndex)

            if (doc.data().color[colorIndex].stock >= itemInCart.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().color[colorIndex].stock - itemInCart.cantidad
                })
            } else {
                sinStock.push(itemInCart)
            }
        })

        if (sinStock.length === 0) {
            batch.commit()
                .then(() => {
                    setLoading(true)
                    addDoc(ordenesRef, orden)
                        .then((doc) => {
                            setOrderId(doc.id)
                            emptyCart()
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                        .finally(() => {
                            setLoading(false)
                        })

                })
        } else {

            alert("Hay items sin stock")
            console.log(sinStock)
        }

    }

    if (orderId) {
        return (
            <>
                {loading ? <div className="spinner" ><MoonLoader /> </div>
                    :
                    <main className="body-confirmado">
                        <div className="container-confirmado">

                            <div className="container-respuesta">
                                <h2 className="titulo-respuesta">Compra exitosa!</h2>
                                <h4 className="titulo-respuesta">Muchas gracias {activeUser.email}</h4>
                                <p className="codigo-respuesta">Tu número de orden es: <strong className="ordenId">{orderId}</strong></p>
                                <Link to="/" className="link-compra-finalizada">Volver a Inicio</Link>
                            </div>
                        </div>
                    </main>
                }
            </>
        )
    }


    if (activeUser) {
        return (
            <main className="body-confirmado">
                <section className="container-confirmado">
                    <div className="container-respuesta">
                        <h1 className="titulo-respuesta">{activeUser.email}</h1>
                        <form onSubmit={handleSubmit} className="formulario-contacto">
                            <div className="contacto-input-wrapper">
                                <label className="contact-label">Serán cargados a tu cuenta $ {cartTotal()}</label>
                                <div className="detalle-compra-finalizada">
                                    <div className="detalle-father">

                                        {cart.map((prod, index) =>
                                            <div key={index} className="detalle-box-checkout">
                                                <p className="detalle-producto-checkout">Producto: {prod.nombre} - {prod.color}</p>
                                                <p className="detalle-producto-checkout">Cantidad: {prod.cantidad}</p>
                                            </div>)}
                                    </div>
                                </div>
                                <label className="contact-label">Dirección de envío</label>
                                <input className="input-form"  name="direccion" onChange={handleInputChange} value={values.direccion} type={'text'} placeholder="Dirección"></input>
                                <button type="submit" value="submit" className="input-contacto-enviar">Confirmar mi compra</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        )
    }

    return (

        <Login fromCheckout="checkout"/>
    )
}


export default Checkout