import { useState } from "react";

const useCartState = () =>{

    const [itemsShoes, setItemsShoes] = useState({
        cart:[]
    });

    const addToCart = (product) =>{
        setItemsShoes(
            {
                ...itemsShoes , 
                cart: [
                    ...itemsShoes.cart, product
                ]
            }
        )
    }

    const removeFromCart = (product) => {

        setItemsShoes(
            {
                ...itemsShoes,
                cart: itemsShoes.cart.filter(item => {
                    return item.id !== product.id
                    })
                
            }
        )

    }

    return {
        itemsShoes,
        addToCart,
        removeFromCart
    }
}



export default useCartState;