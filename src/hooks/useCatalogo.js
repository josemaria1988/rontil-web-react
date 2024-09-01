/* import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../Firebase/config'

export const useCatalogo = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const productosRef = collection(db, 'stockProductos')
        const q = categoryId 
                    ? query(productosRef, where('tipo', '==', categoryId) )
                    : productosRef
        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })
        
    }, [categoryId])

    return ({
        productos, loading, categoryId
    })
} */


import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import stock from "../data/stock";

export const useCatalogo = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        
        // Filtrar productos localmente
        const productosFiltrados = categoryId 
            ? stock.filter(producto => producto.tipo === categoryId)
            : stock;

            console.log('Productos filtrados:', productosFiltrados);

        setProductos(productosFiltrados);
        setLoading(false);
        
    }, [categoryId]); //aca termina el useEffect

    return {
        productos, 
        loading, 
        categoryId
    };
}