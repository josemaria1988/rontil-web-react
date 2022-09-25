import React, { useState } from 'react';
import { useCartContext } from '../../Context/CartContext';
import { addDoc, collection, writeBatch, query, where, documentId, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import './Checkout.scss'
import { Link } from 'react-router-dom';
import MoonLoader from 'react-spinners/MoonLoader';
import { useLoginContext } from '../../Context/LoginContext';
import Registro from '../Login/Registro';

const Checkout = () => {

    const { cart, cartTotal, emptyCart } = useCartContext()
    const { activeUser } = useLoginContext()

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const orden = {
            comprador: activeUser.uid,
            contacto: activeUser.email,
            items: cart,
            total: cartTotal(),
            date: serverTimestamp()
        }

        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'stockProductos')

        const q = query(productosRef, where(documentId(), 'in', cart.map(item => item.id.toString())))

        const productos = await getDocs(q)

        const sinStock = []

        productos.docs.forEach((doc) => {
            const itemInCart = cart.find(item => item.id === doc.id)

            if (doc.data().color.stock >= itemInCart.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().color.stock - itemInCart.cantidad
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
                                <div className="detalle-compra-finalizada">
                                </div>
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
            <main className="body-contacto">
            <section className="container-contacto">
                <div className="contacto-derecho">
                    <h1 className="contacto-title">{activeUser.email}</h1>
                    <form onSubmit={handleSubmit} className="formulario-contacto">
                        <div className="contacto-input-wrapper">
                            <label className="contact-label">$ {cartTotal()} serán cargados a tu cuenta!</label>
                            <button type="submit" value="submit" className="input-contacto-enviar">Confirmar mi compra</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
        )
    }

    return (
       
       <Registro/>
    )
}


export default Checkout