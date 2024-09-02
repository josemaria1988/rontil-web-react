import React from 'react';
import './Inicio.scss';
import Banner from '../Banner/Banner.jsx'
import ItemListContainer from '../ItemListContainer/ItemListContainer.jsx'

const Inicio = (props) => {

    return (
        <main className="caja-inicio">
                <h1>BIENVENIDOS A RONTIL S.A. </h1>
                <h2>28 AÑOS ACOMPAÑANDO A LA AGROINDUSTRIA EN URUGUAY</h2>
                <Banner />
                <ItemListContainer />
        </main>
    )
}



export default Inicio