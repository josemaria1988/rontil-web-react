import React, {useState, useEffect} from 'react'
import './ItemListContainer.scss'
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemList from "../ItemList/ItemList"
import MoonLoader from "react-spinners/MoonLoader";

export default function ItemListContainer() {

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
      <h4 className="cardsTittle">Productos Destacados</h4>

      <ItemList productos={productos}/>

    </div>
  }
    </>
  );
}