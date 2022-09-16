
import React from "react";
import './Item.scss'
import { useNavigate } from 'react-router-dom';


const Item = ({ producto }) => {

   
    let navigate = useNavigate();
    const handleNavigation = () => {
        navigate(`/detail/${producto.id}`)
    }

    console.log()
    return (
        <div className="container">
            <div className="card">
                <img src={producto.color[0].img[0]} alt={producto.nombre} onClick={handleNavigation}/>
                <div className="contenido-card">
                    <h4 className="titulo-card">{producto.nombre}</h4>
                    <p>Precio: {producto.color.precio}</p>
                    <p>Stock disponible: {producto.color.stock}</p>
                    <p>{producto.desc}</p>
                    <button onClick={handleNavigation} className="btn-card">Ver en detalle</button>
                </div>
            </div>
        </div>
    )
}

export default Item