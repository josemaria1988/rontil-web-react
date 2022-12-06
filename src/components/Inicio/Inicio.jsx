import React from 'react';
import './Inicio.scss';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import secadoratromink from '../../assets/img/secadoratromink.jpg'
import portada2 from '../../assets/img/portada2.jpg'
import jorgensen from '../../assets/img/jorgensen.jpg'


const Item = (props) => {
    return (
            <Paper className="paper-carousel">
                <h2>{props.item.name}</h2>
                <img src={props.item.img} alt={props.item.imge}/>
                <Button className="CheckButton">
                    Ver más!
                </Button>
            </Paper>
    )
}

const Inicio = (props) => {

    const items = [
        {
            name: "SULO",
            description: "Random description for this item",
            img: portada2
        },
        {
            name: "TROMINK",
            description: "Even more random description for this",
            img: secadoratromink
        },
        {
            name: "JORGENSEN",
            description: "A ver si funciona",
            img: jorgensen
        }
    ]

    return (
        <div className="caja-inicio">
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
        </div>
    )
}



export default Inicio