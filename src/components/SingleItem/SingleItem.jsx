
import React, { useState } from "react";
import './SingleItem.scss'
import ItemCount from '../ItemCount/ItemCount.jsx'


const SingleItem = ({ producto }) => {

    const [counter, setCounter] = useState(1);

    const onAdd = () => {
        if (counter < producto.stock) setCounter(counter + 1);
    }

    const onDecrement = () => {
        if (counter > producto.cantidad) setCounter(counter - 1);
    }

    return (
        <div className="details">
            <div className="big-img">
                <img src={producto.img} alt="" />
            </div>
            <div className="box">
                <div className="row">
                    <h2>{producto.nombre}</h2>
                    <h3>$ {producto.precio}</h3>
                </div>
                <div className="colors">
                    {producto.color.map((color, index) => (
                        <button key={index} style={{ background: color }}></button>
                    ))}
                </div>
                <p>{producto.desc}</p>

                <div className="carrito-count">
                    <ItemCount precio={producto.precio} counter={counter} onAdd={onAdd} onDecrement={onDecrement} />
                    <button className="btn-comprar">Añadir al Carrito</button>
                </div>
                <p>Stock disponible: {producto.stock}</p>
                <div className="thumb">
                    {
                        producto.img.map((img, index) => (
                            <img key={index} src={img} alt="" />
                        ))
                    }
                </div>
                
                
            </div>

        </div>
    )
}

export default SingleItem