
import React, {useState} from "react";
import './SingleItem.scss'
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
    <div className="item-detail-father">
        <div className="item-detail-image">
            <img src={producto.img} className="big-img" alt=""/>
        </div>
        <div className="box-detail">
            <h2>{producto.nombre}</h2>
            <h3>$ {producto.precio}</h3>
        </div>
        <div className="variantes-color">
            {producto.color.map(color => (
                <button style={{background: color}}></button>
            ))}
        </div>
        <p>{producto.desc}</p>
        <p>ñ{producto.stock}</p>
        <div className="thumbnail">
            {
                producto.img.map( img => (
                    <img src={img} alt=""/>
                ))
            }
        </div>
        <ItemCount precio={producto.precio} counter={counter} onAdd={onAdd} onDecrement={onDecrement}/>
        <button className="btn-comprar">Añadir al Carrito</button>

    </div>
   )
}

export default Item