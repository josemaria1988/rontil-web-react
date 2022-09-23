import React, { useState } from 'react';
import { useCartContext } from '../../Context/CartContext';
import { addDoc, collection, writeBatch, query, where, documentId, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import './Checkout.scss'
import { Link } from 'react-router-dom';
import MoonLoader from 'react-spinners/MoonLoader';

const Checkout = () => {

    const { cart, cartTotal, emptyCart } = useCartContext()

    const [loading, setLoading] = useState(false)
    const [mensajeError, setMensajeError] = useState('')
    const [orderId, setOrderId] = useState(null);

    const [comprador, setComprador] = useState({
        nombre: '',
        email: '',
        phone: '',
        direccion: '',
        message: ''
    })

    const handleInputChange = (e) => {
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const orden = {
            comprador: comprador,
            items: cart,
            total: cartTotal(),
            date: serverTimestamp()
        }

        if (comprador.nombre.length < 2) {
            setMensajeError('Completa tu nombre correctamente!!!')
            return
        }

        if (comprador.email.length < 2) {
            setMensajeError('Completa tu email correctamente!!!')
            return
        }
        if (comprador.phone.length < 9) {
            setMensajeError('Completa tu teléfono correctamente!!!')
            return
        }

        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'stockProductos')

        const q = query(productosRef, where(documentId(), 'in', cart.map(item => item.id.toString())))

        const productos = await getDocs(q)

        const sinStock = []

        productos.docs.forEach((doc) => {
            const itemInCart = cart.find(item => item.id === doc.id)

            if (doc.data().stock >= itemInCart.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.cantidad
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
                            setMensajeError(error)
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



    return (
        <main className="body-contacto">
            <section className="container-contacto">
                <div className="contacto-derecho">
                    <h1 className="contacto-title">Tus datos</h1>
                    <form onSubmit={handleSubmit} className="formulario-contacto">
                        <div className="contacto-input-wrapper">
                            <label className="contact-label">Nombre</label>
                            <input
                                onChange={handleInputChange}
                                className="input-contacto"
                                type="text"
                                name="nombre"
                                value={comprador.nombre}
                                placeholder="Nombre" />
                        </div>
                        <div className="contacto-input-wrapper">
                            <label className="contact-label">Email</label>
                            <input
                                onChange={handleInputChange}
                                className="input-contacto"
                                type="email"
                                name="email"
                                value={comprador.email}
                                placeholder="Email" />
                        </div>
                        <div className="contacto-input-wrapper">
                            <label className="contact-label">Teléfono</label>
                            <input
                                onChange={handleInputChange}
                                className="input-contacto"
                                type="number"
                                name="phone"
                                value={comprador.phone}
                                placeholder="Teléfono" />
                        </div>
                        <div className="contacto-input-wrapper">
                            <label className="contact-label">Aclaraciones adicionales</label>
                            <textarea onChange={handleInputChange} className="input-contacto-mensaje" type="message" name="message" placeholder="Mensaje"></textarea>
                            {mensajeError && <p className="mensaje-error">{mensajeError}</p>}
                            <button type="submit" value="submit" className="input-contacto-enviar">Confirmar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}


export default Checkout