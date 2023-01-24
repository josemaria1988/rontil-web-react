import React from 'react';
import './Inicio.scss';
import Banner from '../Banner/Banner.jsx';
import citybac4 from '../../assets/img/citybac-4.jpg'
import silos from '../../assets/img/silo-granja-symaga.jpg';
import { useNavigate } from 'react-router-dom';

const Inicio = (props) => {

    let navigate = useNavigate();
    const handleNavigation = () => {
        navigate(`/`)
    }

    return (
        <div className="caja-inicio">
            <Banner />
            <div className="container-inicio">
                <div className="card-inicio">
                    <div className="box-inicio">
                        <div className="content-inicio">
                            <img src={citybac4} alt='citybac' onClick={handleNavigation} />
                            <h3>Medio Ambiente</h3>
                            <p>Compactadores de residuos. Equipos alza contenedores. Contenedores para residuos. Cestos papeleros. Columnas de recolección selectiva. Contenedores soterrados. Cestos especiales (pilas, caninos, compost y para oficina)</p>
                            <button onClick={handleNavigation} className="button-inicio">Ver más</button>
                        </div>
                    </div>
                </div>

                <div className="card-inicio">
                    <div className="box-inicio">
                        <div className="content-inicio">
                            <img src={silos} alt='silos' onClick={handleNavigation} />
                            <h3>Agroindustria</h3>
                            <p>Silos, equipos para acopio, secado, movimiento, procesamiento y análisis de materiales a granel, tanto para puertos como para plantas de silos y molinos.</p>
                            <button onClick={handleNavigation} className="button-inicio">Ver más</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Inicio