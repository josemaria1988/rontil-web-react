import React, {useState, useEffect} from 'react'
import './ItemDetailContainer.scss'
import {useParams} from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import MoonLoader from "react-spinners/MoonLoader";
import RelatedItems from '../../components/RelatedItems/RelatedItems.jsx'
import {Link} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../Firebase/config.js'

const ItemDetailContainer = () => {

  const [producto, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {itemId} = useParams()

  useEffect(() => {
    setLoading(true)
    const itemRef = doc(db, 'stockProductos', itemId) 
    getDoc(itemRef)
      .then((resp) => {
        setProductos({id: resp.id, ...resp.data() })
      })
      .finally(() => {
        setLoading(false)
      })

}, [itemId])

  
  return (
  <div className="item-detail-container-div">
    {loading ? <div className="spinner" ><MoonLoader/> </div>  
     : 
    <div className="divCards">
      <div className="tittle-width-back-link">
      <Link to='/' className="nav-link back-link"><ArrowBackIcon/>Volver Atras</Link>
      <h4 className="cardsTittle">Detalle de Producto</h4>
      </div>

      <ItemDetail producto={producto}/>
      <RelatedItems categoria={producto.tipo}/>
    </div>
  }
    </div>
  );
}

export default ItemDetailContainer