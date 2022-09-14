
import React, {useState, useEffect} from 'react';
import './ItemListContainer.scss';
import { pedirDatos } from "../../helpers/pedirDatos";
import { useParams } from 'react-router-dom';
import ItemList from "../ItemList/ItemList";
import MoonLoader from "react-spinners/MoonLoader";
import Banner from '../Banner/Banner.jsx';
import '../Spinners/MoonLoader.scss';

export default function ItemListContainer() {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams()

    useEffect(() => {
        pedirDatos()
        .then( (res) => {
          if (!categoryId) {
            setProductos(res)
          } else {
            setProductos( res.filter((prod) => prod.tipo === categoryId) )
          }
      })
            .catch( (error) => {
              setLoading(false)
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])
  
  return (
  <>
    {loading ? <div className="spinner" ><MoonLoader/> </div>  
     : 
     <div>
      <Banner/>
      {
        categoryId ? <h4 className="cardsTittle">{categoryId}</h4> : <h4 className="cardsTittle">Todos los Productos</h4>
      }
    <div  className="divCards">
      <ItemList productos={productos}/>

    </div>

    </div>
  }
    </>
  );
}