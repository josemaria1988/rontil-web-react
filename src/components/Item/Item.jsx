
import React from "react";
import './Item.scss'
import { useNavigate } from 'react-router-dom';


const Item = ({ producto }) => {

   
    let navigate = useNavigate();
    const handleNavigation = () => {
        navigate(`/detail/${producto.id}`)
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
                    <button onClick={handleNavigation} className="btn-card">Ver en detalle</button>
                </div>
            </div>
        </div>
    )
}

export default Item