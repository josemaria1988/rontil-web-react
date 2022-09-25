import React from 'react'
import './ItemDetailContainer.scss'
import { useProducto } from '../../hooks/useProducto'
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import MoonLoader from "react-spinners/MoonLoader";
import RelatedItems from '../../components/RelatedItems/RelatedItems.jsx'
import {Link} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ItemDetailContainer = () => {

  const { producto, loading } = useProducto()
  
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