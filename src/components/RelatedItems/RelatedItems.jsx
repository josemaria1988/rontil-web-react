import React from 'react';
import './RelatedItems.scss';
import { useNavigate } from 'react-router-dom';
import MoonLoader from 'react-spinners/MoonLoader.js';
import '../Spinners/MoonLoader.scss';
import { useCatalogo } from '../../hooks/useCatalogo'

const RelatedItems = ({ categoria }) => {

    const {productos, loading} = useCatalogo()

    let navigate = useNavigate();
    const handleNavigation = (prodId) => {
        navigate(`/detail/${prodId}`)
    }
    const related = productos.filter((rel) => rel.tipo === categoria)


    return (
        <>
                    <hr />
            {loading ? <div className="spinner" ><MoonLoader /> </div>
                :
                <div className="relatedFather">
                    <h2>Productos relacionados</h2>

                    {
                        related.map((prod, index) => <div className="related" key={index}>
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