import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import { addDoc, collection, writeBatch, query, where, documentId, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/config';

const Checkout = () => {

    const { cart, cartTotal, emptyCart } = useCartContext()

    const [orderId, setOrderId] = useState(null);
    const [values, setValues] = useState({
        nombre: '',
        email: '',
        phone: '',
        direccion: '',
        message: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
        }

        if (values.nombre.length < 2) {
            alert("Nombre incorrecto")
            return
        }

        if (values.email.length < 2) {
            alert("Email incorrecto")
            return
        }
        if (values.phone.length < 9) {
            alert("Teléfono incorrecto")
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
                    addDoc(ordenesRef, orden)
                        .then((doc) => {
                            console.log(doc.id)
                            setOrderId(doc.id)
                            emptyCart()
                        })
                })
        } else {
            
            alert("Hay items sin stock")
            console.log(sinStock)
        }

    }

    if (orderId) {
        return (
            <div className="container-checkout">
                <h2>Compra exitosa!</h2>
                <hr/>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
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
                                value={values.nombre}
                                placeholder="Nombre" />
                        </div>
                        <div className="contacto-input-wrapper">
                            <label className="contact-label">Email</label>
                            <input 
                                onChange={handleInputChange} 
                                className="input-contacto" 
                                type="email" 
                                name="email" 
                                value={values.email}
                                placeholder="Email" />
                        </div>
                        <div className="contacto-input-wrapper">
                            <label className="contact-label">Dirección</label>
                            <input 
                                onChange={handleInputChange} 
                                className="input-contacto" 
                                type="text" 
                                name="direccion" 
                                value={values.direccion}
                                placeholder="Dirección" />
                        </div>
                        <div className="contacto-input-wrapper">
                            <label className="contact-label">Teléfono</label>
                            <input 
                                onChange={handleInputChange} 
                                className="input-contacto" 
                                type="number" 
                                name="phone" 
                                value={values.phone}
                                placeholder="Teléfono" />
                        </div>
                        <div className="contacto-input-wrapper">
                            <label className="contact-label">Aclaraciones adicionales</label>
                            <textarea onChange={handleInputChange} className="input-contacto-mensaje" type="message" name="message" placeholder="Mensaje"></textarea>
                            <button type="submit" value="submit" className="input-contacto-enviar">Confirmar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}


export default Checkout