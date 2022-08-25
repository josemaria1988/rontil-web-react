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
  );
}