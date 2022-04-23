import React, { createContext } from "react";
import useCartState from "../hooks/useCartState";
//import Show from "../Components/Cart/Show";

const CartContext = createContext();

export function CartProvider ({children}){

    const cart = useCartState();
    //const showCart = Show();

    // const value = {
    //     cart,
    //     showCart
    // }

     

    return(
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;

