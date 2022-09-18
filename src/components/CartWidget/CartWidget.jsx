import React from 'react'
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../../Context/CartContext';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './CartWidget.scss'

export default function IconButtons() {

  const {cartQuantity, cart} = useCartContext()

  return (
    
      <IconButton aria-label="shopping cart">
        
        {
          cart.length === 0 ? <><ShoppingCartOutlinedIcon className="empty-cart-icon"/></> : <><ShoppingCartIcon className="cart-icon" /> <span className="widget-span">{cartQuantity()}</span></>

        }
      </IconButton>
  
  );
}