
import React, { useState } from "react";
import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount.jsx'


const ItemDetail = ({ producto }) => {

    const [counter, setCounter] = useState(1);
    const onAdd = () => {
        if (counter < producto.stock) setCounter(counter + 1);
    }
    const onDecrement = () => {
        if (counter > producto.cantidad) setCounter(counter - 1);
    }

    let [imgIndex, setIndex] = useState(0);

    const handleImage = (index) => {
        setIndex(imgIndex = index)
    }
    
    return (
       
        <div className="details">
            <div className="big-img">
                <img src={producto.img[imgIndex]} key={producto.img.index}alt="" />
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
                    <button className="btn-comprar">Añadir al Carrito</button>
                </div>
                <p>Stock disponible: {producto.stock}</p>
                <div className="thumb">
                    {
                        producto.img.map((img, index) => (
                            <img key={index} src={img} alt="" onClick={() => handleImage(index)} />
                        ))
                    }
                </div>
                
                
            </div>

        </div>
    )
}

export default ItemDetail