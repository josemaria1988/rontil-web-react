import React from 'react'
import './Profile.scss'
import '../Spinners/MoonLoader.scss'
import { useOrdenes } from '../../hooks/useOrdenes'
import { useLoginContext } from '../../Context/LoginContext';
import { MoonLoader } from 'react-spinners';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useForm } from '../../hooks/useForm';


const Profile = () => {

    const { activeUser, updateUserProfile } = useLoginContext()
    const { ordenes, loading } = useOrdenes()
    const { values, handleInputChange } = useForm({
        name: '',
        fotoURL: ''
    })
    let user = activeUser || {}

    const handleUpdateUser = (e) => {
        e.preventDefault()
        updateUserProfile(values.name, values.fotoURL)
    }

    return (
        <>

            <div className="div-update-section">
                <h4 className="titulo-respuesta">Datos del Perfil</h4>
                <ul className="ul-update-section">
                    <li className="li-update-section"> {
                        activeUser.photoURL ? <img className="photo-update-section" src={activeUser.photoURL} alt={activeUser.displayName}/>
                        :
                        <img className="nav-user-photo" src="https://adscvcongreso2022.onsitevents.com/assets/imgs/default/default-logo.jpg" alt="photoURL"/> }
                            </li>
                    <li className="li-update-section">Nombre: {activeUser.displayName}</li>
                    <li className="li-update-section">Telefono: {activeUser.phoneNumber}</li>
                    <li className="li-update-section">Email: {activeUser.email}</li>
                    <li className="li-update-section">ID Usuario: {activeUser.uid}</li>
                </ul>

                <div>
                    <h4 className="titulo-respuesta">Actualiza tus Datos</h4>

                    <form className="form-update-section"onSubmit={handleUpdateUser}>
                        <label className="label-update-section">Nombre:</label>
                        <input className="input-update-section" name='name' type={'name'} value={values.name} onChange={handleInputChange}></input>

                        <label className="label-update-section">Foto de Perfil: URL</label>
                        <input className="input-update-section" name='fotoURL' type={'fotoURL'} value={values.fotoURL} onChange={handleInputChange}></input>
                        <button className="submit-update-section" type="submit">Confirmar</button>
                    </form>
                </div>
            </div>
            <div className="body-confirmado">

                <div className="container-confirmado">
                    <h1 className="titulo-respuesta">Bienvenido a tu perfil {user.displayName}</h1>
                    <h4 className="codigo-respuesta">Estas son tus compras</h4>

                    {
                        loading ? <div className="spinner" ><MoonLoader /> </div>

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