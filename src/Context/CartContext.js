import { createContext, useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const CartContext = createContext()


const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(init)
    const MySwal = withReactContent(Swal)


    const addToCart = (item) => {
        if (!isInCart(item.id)) {
            setCart([...cart, item])
        } else {
            let itemRepetido = cart.find(prod => prod.id === item.id)
            itemRepetido.cantidad + item.cantidad > item.stock ? (itemRepetido.cantidad = item.stock) && getStock(item) : itemRepetido.cantidad += item.cantidad
            const newCart = cart.filter(prod => prod.id !== item.id)
            setCart([...newCart, itemRepetido])

        }
    }

    const getStock = (item) => {

        MySwal.fire({
            title: <p>Un momento...</p>,
            timer: 500,
            didOpen: () => {
                MySwal.showLoading()
            },
        }).then(() => {
            return MySwal.fire(<p>Tu solicitud de {item.nombre} excede el stock disponible. Hemos ajustado su cantidad a {item.stock} unidades. <ErrorOutlineIcon /></p>,)
        })
    }


    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
    }

    const emptyCart = () => {
        setCart([])
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cart))
    }, [cart])

    const handleFinalizar = () => {

        if (cart.length !== 0) {
            return MySwal.fire({
                title: <p>Procesando pedido...</p>,
                timer: 1500,
                didOpen: () => {
                    MySwal.showLoading()
                },
            }).then(function() {
                window.location = "/checkout";
            })
        }
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cartQuantity,
            cartTotal,
            emptyCart,
            removeItem,
            handleFinalizar
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}

