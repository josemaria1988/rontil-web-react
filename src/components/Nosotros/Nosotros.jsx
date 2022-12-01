import React from 'react';
import './Nosotros.scss';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SecurityIcon from '@mui/icons-material/Security';

const Nosotros = () => {

    return (
        <div className="nosotros-container">
            <h1 className="nosotros-titulo">Sobre nosotros</h1>
            <div className="quienes-somos">
                
                <h2>Quienes somos</h2>
                <p>RONTIL S.A. nació en 1996 con el afán de proveer repuestos a las empresas agroindustriales uruguayas (plantas de acopio y molinos) con una respuesta mucho más rápida que la habitual en el mercado</p>
                <p>Pasaron los años y la cartera de representaciones y productos se amplió, actualmente se puede dividir la oferta de la empresa en dos grandes áreas.</p>
                <div className="areas-mercado">
                <h3>MEDIO AMBIENTE</h3>
                <ul>
                    <li>Compactadores de residuos</li>
                    <li>Equipos alza contenedores</li>
                    <li>Contenedores para residuos</li>
                    <li>Cestos papeleros</li>
                    <li>Columnas de recolección selectiva</li>
                    <li>Contenedores soterrados</li>
                    <li>Cestos especiales (pilas, caninos, compost, oficina)</li>
                </ul>
                </div>
                <div className="areas-mercado">
                <h3>AGROINDUSTRIA</h3>
                <ul>
                    <li>Silos</li>
                    <li>Secadoras</li>
                    <li>Transportadores</li>
                    <li>Limpieza</li>
                    <li>Tornillería</li>
                    <li>Canalización</li>
                    <li>Cangilones</li>
                    <li>Bandas</li>
                    <li>Análisis</li>
                </ul>
                </div>
            </div>
             <div className="iconos-father">
                <div className="iconos-nosotros">
                    <SecurityIcon className="iconos"/>
                    <h4 className="titulos-iconos">Seguridad</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit eaque facilis modi officiis, numquam perferendis minima non animi beatae exercitationem minus magnam, saepe fugiat! Vel tenetur sunt ut qui odit.
                    Ex aliquam repellat consequatur sed culpa! Officia delectus quis veniam harum cupiditate odit ipsam aut veritatis sequi expedita. Molestiae, provident ab animi praesentium facilis laboriosam! Impedit quas atque culpa nesciunt.</p>
                </div>

                <div className="iconos-nosotros">
                <AttachMoneyIcon className="iconos"/>
                    <h4 className="titulos-iconos">El mejor precio</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum mollitia unde nulla adipisci quaerat vitae omnis suscipit dolore, nobis doloribus hic, maiores aperiam voluptatum, quam odio possimus sint eum. Quam.
                    Velit modi atque, minus autem quisquam explicabo consequuntur earum error tenetur odit vero necessitatibus id facere sint possimus quod hic. Error doloremque, at fugiat excepturi cumque praesentium optio beatae neque!</p>
                </div>
                <div className="iconos-nosotros">
                    <AccessTimeIcon className="iconos"/>
                    <h4 className="titulos-iconos">A tiempo</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde eaque vero ex maiores in minus, modi dolorum fuga omnis non, eveniet ducimus voluptatibus architecto iure perferendis quam! A, facilis?
                    Itaque expedita, neque quae nesciunt autem, vitae dolor totam, dolorem dolore veritatis soluta voluptatum. Saepe vero sunt facere voluptate maxime quisquam perferendis, numquam placeat ipsa animi nulla. Inventore, cumque dolor?</p>
                </div>
             </div>
        </div>
    )
}

export default Nosotros