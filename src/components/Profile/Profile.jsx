import React from 'react'
import './Profile.scss'
import { useOrdenes } from '../../hooks/useOrdenes'
import MoonLoader from 'react-spinners/MoonLoader';
import { useLoginContext } from '../../Context/LoginContext';

const Profile = () => {

    const { activeUser } = useLoginContext([])
    activeUser = localStorage.getItem("usuario", JSON.parse(activeUser))
    const { ordenes, loading } = useOrdenes()

   return (
    <>
    {
        loading ? <div className="spinner"><MoonLoader/></div>
        :

        <div className="user-body">

            <h1>Bienvenido a tu perfil {activeUser.email}</h1>
            <h4>Estas son tus compras</h4>

            {/* <div>
                {
                    ordenes.map((prod, index) => (<div key={index}>
                        <p>Fecha: {prod.comprador}</p>
                        <p>Fecha: {prod.contacto}</p>
                        <p>Fecha: {prod.date}</p>
                        <p>Items: {prod.items}</p>
                        <p>Total: {prod.total}</p>
                    </div>))
                }
            </div> */}

        </div>
    }
    </>
    )
}

export default Profile