import React from 'react'
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../../Context/CartContext';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function IconButtons() {

  const {cartQuantity, cart} = useCartContext()

  return (
  
      <IconButton color="primary" aria-label="shopping cart">
        
        {
          cart.length === 0 ? <><ShoppingCartOutlinedIcon/></> : <><ShoppingCartIcon /> <span>{cartQuantity()}</span></>

        }
      </IconButton>
  
  );
}