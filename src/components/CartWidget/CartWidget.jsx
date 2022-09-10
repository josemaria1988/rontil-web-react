import React from 'react'
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../../Context/CartContext';

export default function IconButtons() {

  const {cartQuantity} = useCartContext()

  return (
  
      <IconButton color="primary" aria-label="shopping cart">
        <ShoppingCartIcon />
        <span>{cartQuantity()}</span>
      </IconButton>
  
  );
}