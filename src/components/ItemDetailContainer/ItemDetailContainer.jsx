import React, {useState, useEffect} from 'react'
import './ItemDetailContainer.scss'
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemDetail from "../ItemList/ItemList"
import MoonLoader from "react-spinners/MoonLoader";

const ItemDetailContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

    useEffect(() => {
        pedirDatos()
            .then( (res) => {
                setProductos(res)
                setLoading(false)
            })
            .catch( (error) => {
              setLoading(false)
                console.log(error)
            })
            .finally(() => {
                // console.log("Fin del proceso")
            })
    }, [])
  
  return (
  <>
    {loading ? <div className="spinner" ><MoonLoader/> </div>  
     : 
    <div className="divCards">
      <h4 className="cardsTittle">Detalle de Producto</h4>

      <ItemDetail productos={productos}/>

    </div>
  }
    </>
  );
}

export default ItemDetailContainer