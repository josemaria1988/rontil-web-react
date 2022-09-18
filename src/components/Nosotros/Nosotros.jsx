import React from 'react';
import './Nosotros.scss';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SecurityIcon from '@mui/icons-material/Security';

const Nosotros = () => {

    return (
        <div className="nosotros-container">
            <h1 className="nosotros-titulo">Sobre nosotros</h1>
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