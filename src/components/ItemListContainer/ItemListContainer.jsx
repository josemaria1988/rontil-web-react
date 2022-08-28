<<<<<<< HEAD
import React, {useState} from 'react'
import './ItemListContainer.scss'
import ItemCount from '../ItemCount/ItemCount.jsx'



 const producto = {
  nombre: "Producto",
  precio: 1000,
  cantidad: 1,
  stock: 6
 }
  
export default function ItemListContainer() {
    
  const [counter, setCounter] = useState(1);

  const onAdd = () => {
    if(counter < producto.stock) setCounter(counter + 1)
  }

  const onDecrement = () => {
    if(counter > producto.cantidad) setCounter(counter - 1)
  }
  
  return (
    <div className="divCards">
      <h4 className="cardsTittle">Producto 1</h4>
      <h5 className="cardsTittle">Stock disponible 6 unidades</h5>

      <ItemCount counter={counter} onAdd={onAdd} onDecrement={onDecrement}/>

    </div>
=======
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
>>>>>>> ae661d13fd6d54b99cacdc15390e08e79ac3d4fb
  );
}