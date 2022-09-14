import React, {useState, useEffect} from 'react'
import './ItemDetailContainer.scss'
import { pedirDatos } from "../../helpers/pedirDatos"
import {useParams} from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import MoonLoader from "react-spinners/MoonLoader";
import RelatedItems from '../../components/RelatedItems/RelatedItems.jsx'
import {Link} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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