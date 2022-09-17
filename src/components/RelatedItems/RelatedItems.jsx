import React from 'react';
import { useState, useEffect } from 'react';
import './RelatedItems.scss';
import { useNavigate } from 'react-router-dom';
import MoonLoader from 'react-spinners/MoonLoader.js';
import '../Spinners/MoonLoader.scss';
import { db } from '../../Firebase/config'
import { collection, getDocs, query, where } from "firebase/firestore"

const RelatedItems = ({ categoria }) => {

    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const productosRef = collection(db, 'stockProductos')
        const q = categoria 
                    ? query(productosRef, where('tipo', '==', categoria) )
                    : productosRef
        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
                setProducto(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })
        
    }, [categoria])

    let navigate = useNavigate();
    const handleNavigation = (prodId) => {
        navigate(`/detail/${prodId}`)
    }


    return (
        <>
                    <hr />
            {loading ? <div className="spinner" ><MoonLoader /> </div>
                :
                <div className="relatedFather">
                    <h2>Productos relacionados</h2>

                    {
                        producto.map((prod, index) => <div className="related" key={index}>
                            <h4 className="relatedTitle">{prod.nombre}</h4>
                            <img onClick={() => handleNavigation(prod.id)} className="imgRelated" src={prod.color[0].img[0]} alt="" />
                        </div>)
                    }

                </div>
            }
        </>
    )
}

export default RelatedItems