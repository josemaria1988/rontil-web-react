import React, {useState, useEffect} from 'react'
import './ItemDetailContainer.scss'
import { pedirDatos } from "../../helpers/pedirDatos"
import {useParams} from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import MoonLoader from "react-spinners/MoonLoader";

const ItemDetailContainer = () => {

  const [producto, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {itemId} = useParams()

  useEffect(() => {
    setLoading(true)

    pedirDatos()
        .then((res) => {
            setProductos( res.find((prod) => prod.id === Number(itemId)) )
        })
        .catch(err => console.log(err))
        .finally(() => {
            setLoading(false)
        })
    // setear el estado con un único producto

}, [])

  
  return (
  <>
    {loading ? <div className="spinner" ><MoonLoader/> </div>  
     : 
    <div className="divCards">
      <h4 className="cardsTittle">Detalle de Producto</h4>

      <ItemDetail producto={producto}/>

    </div>
  }
    </>
  );
}

export default ItemDetailContainer