import React from 'react';
import './Inicio.scss';
import Banner from '../Banner/Banner.jsx'
import ItemListContainer from '../ItemListContainer/ItemListContainer.jsx'

const Inicio = (props) => {

    return (
        <main>
            <Banner />
            <ItemListContainer />
        </main>
    )
}



export default Inicio