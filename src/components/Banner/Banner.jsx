import React from 'react'
import './Banner.scss'
import '../Inicio/Inicio.scss';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import secadoratromink from '../../assets/img/secadoratromink.jpg'
import portada2 from '../../assets/img/portada2.jpg'
import jorgensen from '../../assets/img/jorgensen.jpg'
import citysolar from '../../assets/img/CitySolar-2.0.png'

const Item = (props) => {
    return (
            <Paper className="paper-carousel">
                <h2 className="titulo-carousel">{props.item.name}</h2>
                <img src={props.item.img} alt={props.item.imge} />
                <Button className="CheckButton">
                    Ver más!
                </Button>
            </Paper>
    )
}

const Banner = () => {

    const items = [
        {
            name: "",
            description: "Random description for this item",
            img: portada2
        },
        {
            name: "",
            description: "Even more random description for this",
            img: secadoratromink
        },
        {
            name: "",
            description: "A ver si funciona",
            img: jorgensen
        },
        {
            name: "",
            description: "Largest waste capacity on the market",
            img: citysolar
        }
    ]

    return (
            <Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
    )
}

export default Banner
