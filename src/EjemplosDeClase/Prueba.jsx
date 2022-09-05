import { Button, Divider } from '@mui/material'
import { useState } from 'react'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect } from 'react';




const ItemCount = ({Stock}) => {

    const [stock, setStock] = useState()

    useEffect(() => {
        setStock(Stock)
    },[Stock])
    
    const [contador, setContador] = useState(1)
    const sumar = () => {
        if (contador < stock) {
            setContador(contador +1)
        }
    }
    const restar = () => {
        if (contador > 1 ) {
            setContador(contador - 1)
        }
    }
    const comprar = () => {
        if (contador >=1 && contador <= stock) {
            setStock(stock - contador)
            alert("añadido al carrito " + contador + " productos")
        }
        else if (contador > stock) {
            alert("no hay stock suficiente")
        }
    }
    return (
        <Box className="Contador" >
            <Typography className='Stock'>Stock: {stock}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:"center"}}>
                <Button color="error" onClick={restar}><RemoveIcon/></Button>
                <Typography>{contador}</Typography>
                <Button onClick={sumar}><AddIcon/></Button>
            </Box>
            <Divider/>
            <Button className='BtnAñadir' variant="contained" onClick={comprar}>Añadir al Carrito</Button>
        </Box>
    )
}
export default ItemCount