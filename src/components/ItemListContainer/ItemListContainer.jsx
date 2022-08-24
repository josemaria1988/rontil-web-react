import React from 'react'
import './ItemListContainer.scss'
import ProductCard from '../ProductCard/ProductCard.jsx'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ItemListContainer(saludo) {
  
  return (
    <div className="divCards">
    <h4 className="cardsTittle">Bienvenido {saludo.usuario}</h4>
    <h5 className="cardsTittle">Mira nuestros productos destacados</h5>
    <Box className="boxCards" sx={{ width: '100%' }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center">
        <Grid item xs={2}>
          <Item>
            <ProductCard/>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <ProductCard/>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <ProductCard/>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <ProductCard/>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}