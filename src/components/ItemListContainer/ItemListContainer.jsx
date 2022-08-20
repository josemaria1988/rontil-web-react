import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ProductCard from '../ProductCard/ProductCard.jsx'

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className="cardBox">
        <Box sx={{ bgcolor: 'whitesmoke', height: '100vh' }}> 
        
        <h1>Bienvenido a la tienda online de Rontil S.A.</h1>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>

        </Box>        
      </Container>
    </React.Fragment>
  );
}