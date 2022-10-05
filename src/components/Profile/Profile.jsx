import React from 'react'
import './Profile.scss'
import '../Spinners/MoonLoader.scss'
import { useOrdenes } from '../../hooks/useOrdenes'
import { useLoginContext } from '../../Context/LoginContext';
import { MoonLoader } from 'react-spinners';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const Profile = () => {

    const { activeUser } = useLoginContext()
    const { ordenes, loading } = useOrdenes()
    let user = activeUser || {}

    return (
        <>
            <div className="body-confirmado">
                <div className="container-confirmado">
                    <h1 className="titulo-respuesta">Bienvenido a tu perfil {user.email}</h1>
                    <h4 className="codigo-respuesta">Estas son tus compras</h4>

                    {
                        loading ? <div className="spinner" ><MoonLoader/> </div>  
     
                        : 

                        <Box sx={{ flexGrow: 1 }}>
                             <Grid container spacing={{ xs: 2, md: 10 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                        {
                            ordenes.map((prod, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <div>
                                    <p className="historial-detalle">Fecha: <span className="span-detalle">{prod.date.toDate().toDateString()}</span></p>
                                    <p className="historial-detalle">Número de Orden <span className="span-detalle">{prod.id}</span></p>
                                    <p className="historial-detalle">Usuario: <span className="span-detalle">{prod.contacto}</span></p>
                                    <p className="historial-detalle">Dirección de entrega: <span className="span-detalle">{prod.direccion}</span></p>
                                    <div className="historial-items"><p className="historial-detalle">Productos: </p>{prod.items.map((item, index) => (
                                        <div key={index}><span className="span-detalle">{item.nombre}</span></div>))}</div>
                                    <p className="historial-detalle">Total: <span className="span-detalle">{prod.total}</span></p>
                                    <hr />
                                </div>
                            </Grid>))
                        }
                        </Grid>
                    </Box>
                   }
                </div>
            </div>
        </>
    )
}

export default Profile