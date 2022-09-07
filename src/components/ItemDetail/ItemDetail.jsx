
import React, { useState } from "react";
import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const ItemDetail = ({ producto }) => {

    const [counter, setCounter] = useState(1);
    let [imgIndex, setIndex] = useState(0);
    
    const onAdd = () => {
        if (counter < producto.stock) setCounter(counter + 1);
    }
    const onDecrement = () => {
        if (counter > producto.cantidad) setCounter(counter - 1);
    }

    const handleImage = (index) => {
        setIndex(imgIndex = index)
    }

    const addToCart = () => {
        
        const itemToCart = {
            id: producto.id,
            nombre: producto.nombre,
            cantidad: counter,
            precio: producto.precio,
            img: producto.img
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
        console.log(itemToCart)

    }

    let navigate = useNavigate();
    const handleNavigationCart = () => {
        navigate(`/cart`)
    }

    return (

        <div className="details">
            <div className="big-img">
                <img src={producto.img[imgIndex]} key={producto.img.index} alt="" />
            </div>
            <div className="box">
                <div className="row">
                    <h2>{producto.nombre}</h2>
                    <h3>$ {producto.precio}</h3>
                </div>
                <div className="colors">
                    <div>Colores disponibles</div>
                    {producto.color.map((color, index) => (
                        <button key={index} style={{ background: color }}></button>
                    ))}
                </div>
                <p>{producto.desc}</p>

                <div className="carrito-count">
                    <ItemCount precio={producto.precio} counter={counter} onAdd={onAdd} onDecrement={onDecrement} />
                    <button className="btn-comprar" onClick={addToCart}>Añadir al Carrito</button>
                    <button onClick={handleNavigationCart} className="btn-card">Finalizar Compra</button>
                </div>
                <p>Stock disponible: {producto.stock}</p>
                <div className="thumb">
                    {
                        producto.color.img.map((img, index) => (
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