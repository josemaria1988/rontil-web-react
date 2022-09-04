import React from 'react';
import {useState, useEffect} from 'react';
import {pedirDatos} from '../../helpers/pedirDatos.js';
import './RelatedItems.scss';
import { useNavigate } from 'react-router-dom';

const RelatedItems = ({categoria}) => {

    const [producto, setProducto] = useState([])

    useEffect(() => {
    
        pedirDatos()
            .then((res) => {
              setProducto( res.filter((prod) => prod.tipo === categoria ))
            })
            .catch(err => console.log(err))
            .finally(() => {
            
        })
    }, [categoria])
    console.log(producto)

    let navigate = useNavigate();
    const handleNavigation = (prodId) => {
        navigate(`/detail/${prodId}`)
    }


    return(
        <>
        <hr/>
        <div className="relatedFather">
            <h2>Productos relacionados</h2>

        {
            producto.map((prod, index) => <div className="related" key={index}>
                <h4 className="relatedTitle">{prod.nombre}</h4>
                <img onClick={() => handleNavigation(prod.id)} className="imgRelated" src={prod.img} alt=""/>
            </div>)
        }
        
        </div>
        </>
    )
}

export default RelatedItems