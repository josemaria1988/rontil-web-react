
import React, { useState } from "react";
import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from "../../Context/CartContext";


const ItemDetail = ({ producto }) => {
    const {addToCart, cart} = useCartContext()

    const [counter, setCounter] = useState(1);
    let [imgIndex, setImage] = useState(0);
    let [colorIndex, setColor] = useState(0);
    
    const onAdd = () => {
        if (counter < producto.color[colorIndex].stock) setCounter(counter + 1);
    }
    const onDecrement = () => {
        if (counter > producto.cantidad) setCounter(counter - 1);
    }

    const handleImage = (index) => {
        setImage(index)
    }
    const handleColor = (index) => {
        setColor(index)
    }

    const handleAgregar = () => {
        
        const itemToCart = {
            id: producto.color[colorIndex].id,
            nombre: producto.nombre,
            cantidad: counter,
            stock: producto.color[colorIndex].stock,
            precio: producto.color[colorIndex].precio,
            img: producto.color[colorIndex].img[0]
        }
        toast('Agregado al carrito!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        
        addToCart(itemToCart)
    }

    let navigate = useNavigate();
    const handleNavigationCart = () => {
        navigate(`/cart`)
    }

    return (

        <div className="details">
            <div className="big-img">
                <img src={producto.color[colorIndex].img[imgIndex]} key={producto.color[colorIndex].img[imgIndex]} alt="" />
            </div>
            <div className="box">
                <div className="row">
                    <h2>{producto.nombre}</h2>
                    <h3>Precio por unidad <hr/>$ {producto.color[colorIndex].precio}</h3>
                </div>
                <div className="colors">
                    <p>Colores disponibles...</p>
                    <p>Hace click en el color para elegirlo:</p>
                    {producto.color.map((color, index) => (
                        <button key={index} style={{ background: color.value }} onClick={() => handleColor(index)}></button>
                        ))}
                </div>
                <p>{producto.desc}</p>

                <div className="carrito-count">
                    <ItemCount precio={producto.color[colorIndex].precio} counter={counter} onAdd={onAdd} onDecrement={onDecrement} />
                    <button className="btn-comprar" onClick={handleAgregar}>Añadir al Carrito</button>
                        {
                            cart.length === 0 ? "" : <button className="btn-terminar-compra" onClick={handleNavigationCart}>Ir al Carrito</button>
                        }
                    
                </div>
                <p>Stock disponible: {producto.color[colorIndex].stock}</p>
                <div className="thumb">
                    {
                        producto.color[colorIndex].img.map((img, index) => (
                            <img key={index} src={img} alt="" onClick={() => handleImage(index)} />
                        ))
                    }
                    
                </div>


            </div>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default ItemDetail