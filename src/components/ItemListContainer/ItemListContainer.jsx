
import React, {useState, useEffect} from 'react';
import './ItemListContainer.scss';
import { useParams } from 'react-router-dom';
import ItemList from "../ItemList/ItemList";
import MoonLoader from "react-spinners/MoonLoader";
import Banner from '../Banner/Banner.jsx';
import '../Spinners/MoonLoader.scss';
import { db } from '../../Firebase/config'
import { collection, getDocs, query, where } from "firebase/firestore"

export default function ItemListContainer() {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        const productosRef = collection(db, 'stockProductos')
        const q = categoryId 
                    ? query(productosRef, where('tipo', '==', categoryId) )
                    : productosRef
        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
                setProductos(productosDB)
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