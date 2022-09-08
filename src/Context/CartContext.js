import {createContext, useContext, useEffect, useState} from 'react';

export const CartContext = createContext();

const init = JSON.parse(localStorage.getItem('carrito')) || [];

const CartProvider = ({children}) => {
    const [cart, setCart] = useState(init);

    const addToCart = (item) => {
        item.id != cart.findIndex(item => item.id == id) ? setCart([...cart, item]) : carrito[index].cantidad++
    }

    const noRepeat = (id) => {
        const newCart = cart.slice(cart, cart.find((item) => item.id === cart.id))
    }
}