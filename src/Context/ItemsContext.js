import React, { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider ({children}){

    const [itemsShoes, setItemsShoes] = useState([]);

    const addToCart = ( name , price ) => {
        setItemsShoes((preState) => [...preState, (name, price)]);
    };

    return(
        <CartContext.Provider value={{itemsShoes, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;

