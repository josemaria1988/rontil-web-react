import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/config.js';
import {useParams} from 'react-router-dom';

export const useProducto = () => {

    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()
  
    useEffect(() => {
      setLoading(true)
      const itemRef = doc(db, 'stockProductos', itemId) 
      getDoc(itemRef)
        .then((resp) => {
          setProducto({id: resp.id, ...resp.data() })
        })
        .finally(() => {
          setLoading(false)
        })
  
  }, [itemId])

  return ({
    producto, loading, itemId
})
}
  