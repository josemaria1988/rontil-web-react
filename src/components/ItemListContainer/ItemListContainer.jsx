import React, {useState, useEffect} from 'react'
import './ItemListContainer.scss'
import ItemCount from '../ItemCount/ItemCount.jsx'
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemList from "../ItemList/ItemList"


export default function ItemListContainer() {

  const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos()
            .then( (res) => {
                setProductos(res)
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                // console.log("Fin del proceso")
            })
    }, [])
  
  return (
    <div className="divCards">
      <h4 className="cardsTittle">Producto 1</h4>
      <h5 className="cardsTittle">Stock disponible 6 unidades</h5>

      <ItemList productos={productos}/>
      <ItemCount />

    </div>
  );
}