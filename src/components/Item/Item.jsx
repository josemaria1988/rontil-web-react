
import React, {useState} from "react";
import './Item.scss'
import ItemCount from '../ItemCount/ItemCount.jsx'


const Item = ({ producto }) => {

    const [counter, setCounter] = useState(1);

    const onAdd = () => {
        if(counter < producto.stock) setCounter(counter+1);
    }

    const onDecrement = () => {
        if(counter > producto.cantidad) setCounter(counter-1);
    }

    return (
        <div className="container">
            <div className="card">
                <img src={producto.img[0]} alt="NO CARGO IMAGEN" />
                <div className="contenido-card">
                    <h4 className="titulo-card">{producto.nombre}</h4>
                    <p>Precio: {producto.precio}</p>
                    <p>Stock disponible: {producto.stock}</p>
                    <p>{producto.desc}</p>
                    <ItemCount precio={producto.precio} counter={counter} onAdd={onAdd} onDecrement={onDecrement}/>
                    <button className="btn-card">Añadir al Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default Item