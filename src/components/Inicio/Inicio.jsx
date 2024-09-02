import React from 'react';
import './Inicio.scss';
import ItemListContainer from '../ItemListContainer/ItemListContainer.jsx'

const Inicio = (props) => {

    return (
        <main className="caja-inicio">
            <h1>BIENVENIDOS A RONTIL S.A.</h1>
            <h2>28 AÑOS ACOMPAÑANDO A LA AGROINDUSTRIA EN URUGUAY</h2>

            <div className="iconos-nosotros">
                <div className="seccion">
                    <img src="/assets/imagenes/medioambiente1.jpg" alt="Medio Ambiente" />
                    <h3 className="nosotros-titulo">MEDIO AMBIENTE</h3>
                    <ul className="ul-list">
                        <li className="list-element">Compactadores de residuos</li>
                        <li className="list-element">Equipos alza contenedores</li>
                        <li className="list-element">Contenedores para residuos</li>
                        <li className="list-element">Cestos papeleros</li>
                        <li className="list-element">Columnas de recolección selectiva</li>
                        <li className="list-element">Contenedores soterrados</li>
                        <li className="list-element">Cestos especiales (pilas, caninos, compost, oficina)</li>
                    </ul>
                </div>

                <div className="seccion">
                    <img src="/assets/imagenes/agroindustria1.jpg" alt="Agroindustria" />
                    <h3 className="nosotros-titulo">AGROINDUSTRIA</h3>
                    <ul className="ul-list">
                        <li className="list-element">Silos</li>
                        <li className="list-element">Secadoras</li>
                        <li className="list-element">Transportadores</li>
                        <li className="list-element">Limpieza</li>
                        <li className="list-element">Tornillería</li>
                        <li className="list-element">Canalización</li>
                        <li className="list-element">Cangilones</li>
                        <li className="list-element">Bandas</li>
                        <li className="list-element">Análisis</li>
                    </ul>
                </div>
            </div>


            <ItemListContainer />
        </main>
    )
}



export default Inicio