/* import { useState, useEffect } from 'react';
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
} */




import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import stock from '../data/stock'; // Ajusta la ruta según la ubicación del archivo stock.js

export const useProducto = () => {

  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
      setLoading(true);

      // Busca el producto por ID en el stock local
      const productoEncontrado = stock.find(prod => prod.id === parseInt(itemId)); // Asegúrate de que los IDs sean comparables

      setProducto(productoEncontrado);
      setLoading(false);
      
  }, [itemId]);

  return {
      producto, 
      loading, 
      itemId
  };
};
