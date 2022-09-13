import React from 'react'
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../../Context/CartContext';

export default function IconButtons() {

  const {cartQuantity, cart} = useCartContext()

  return (
  
      <IconButton color="primary" aria-label="shopping cart">
        <ShoppingCartIcon />
        {
          cart.length === 0 ? "" : <span>{cartQuantity()}</span>

        }
      </IconButton>
  
  );
}