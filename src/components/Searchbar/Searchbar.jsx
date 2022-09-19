import React, { useState, useEffect } from 'react'
import './Searchbar.scss'
import { db } from '../../Firebase/config'
import { collection, getDocs, query, where } from "firebase/firestore"

const Searchbar = () => {

    const [search, setSearch] = useState('')
    const [item, setItem] = useState([])

   
        useEffect (() => {
            const searchRef = collection(db, 'stockProductos')
            const q = search ? query(searchRef, where('nombre', '==', search)) : searchRef
            getDocs(q)
                .then((resp) => {
                    const searchDB = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                    setItem(searchDB)
                })
                .finally(() => {
                    console.log(item)
                })
    
        }, [search, item])



    return (
        <div className="search-container">
            <input type="text" placeholder="Buscar" className="search-input" onChange={(e) => setSearch(e.target.value)} value={search}></input>
        </div>
    )
}

export default Searchbar