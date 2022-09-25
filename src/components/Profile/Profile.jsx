import React, {useEffect, useState} from 'react'
import './Profile.scss'
import { db } from '../../Firebase/config';
import { collection, query, where,  getDocs, doc } from 'firebase/firestore';
import { useLoginContext } from '../../Context/LoginContext';
import MoonLoader from 'react-spinners/MoonLoader';

const Profile = () => {

    const [ordenes, setOrdenes] = useState([])
    const [loading, setLoading] = useState(true)    

    const { activeUser } = useLoginContext()

    useEffect(() => {
        setLoading(true)
        const ordenesRef = collection(db, 'ordenes')
        const q = activeUser ? query(ordenesRef, where('comprador', '==', activeUser.uid) ) : ordenesRef
        getDocs(q)
            .then((resp) => {
                const ordenesDB = resp.docs.map((doc.id), " => ", doc.data() )
                setOrdenes(ordenesDB)
            })
            .finally(() => {
                setLoading(false) 
            })
    }, [activeUser.uid])

   return (
    <>
    {
        loading ? <div className="spinner"><MoonLoader/></div>
        :

        <div className="user-body">

            <h1>Bienvenido a tu perfil {activeUser.email}</h1>
            <h4>Estas son tus compras</h4>

            <div>
                {
                    ordenes.map((prod, index) => (<div key={index}>
                        <p>Fecha: {prod.date}</p>
                        <p>Items: {prod.items}</p>
                        <p>Total: {prod.total}</p>
                    </div>))
                }
            </div>

        </div>
    }
    </>
    )
}

export default Profile