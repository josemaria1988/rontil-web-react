import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext()


const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(init)


    const addToCart = (item) => {
      setCart([...cart, item])
    }

    // editar cantidad
    // const increaseQuantityInCart = (id) => {
        // const newCart = cart.slice() || [...cart]
        // buscar el item a modificar segun ID
        // verificar qeu la modificación sea posible (IF)
        // setCart(newCart)
    // }

    const removeItem = (id) => {
        setCart( cart.filter((item) => item.id !== id) )
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

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cartQuantity,
            cartTotal,
            emptyCart,
            removeItem
          }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}