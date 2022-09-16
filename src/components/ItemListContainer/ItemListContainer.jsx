
import React, {useState, useEffect} from 'react';
import './ItemListContainer.scss';
import { useParams } from 'react-router-dom';
import ItemList from "../ItemList/ItemList";
import MoonLoader from "react-spinners/MoonLoader";
import Banner from '../Banner/Banner.jsx';
import '../Spinners/MoonLoader.scss';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/config'

export default function ItemListContainer() {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        //Armado de referencia a firebase
        const productosRef = collection(db, 'productos')
        //Consumir referencia
        getDocs(productosRef)
          .then((resp) => {
            const dataProductos = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            setProductos(dataProductos)
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