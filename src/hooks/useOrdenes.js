import {useEffect, useState} from 'react';
import { db } from '../Firebase/config';
import { collection, query, where,  getDocs } from 'firebase/firestore';
import { useLoginContext } from '../Context/LoginContext';

export const useOrdenes = () => {

    const [ordenes, setOrdenes] = useState([])
    const [loading, setLoading] = useState(false)
    
    const { activeUser } = useLoginContext()
    
    useEffect(() => {
        setLoading(true)
        const ordenesRef = collection(db, 'ordenes')
        const q = activeUser 
                    ? query(ordenesRef, where('comprador', '==', activeUser.uid) )
                    : ordenesRef
        getDocs(q)
            .then((resp) => {
                const ordenesDB = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                setOrdenes(ordenesDB)
            }).finally(() => {
                setLoading(false)
            })
    }, [activeUser])

        return(
           {ordenes, loading}
        )
}