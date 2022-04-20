import React, { createContext } from "react";
import useCartState from "../hooks/useCartState";

const CartContext = createContext();

export function CartProvider ({children}){

    const cart = useCartState();

    return(
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;

