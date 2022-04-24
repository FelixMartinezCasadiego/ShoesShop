import { useState } from "react";

const useCartState = () =>{
    
    // Estado de counter
    const [counter, setCounter] = useState(1)

        // Zona de manejo de incremento y disminución
        const handleUp = ()=>{
            setCounter(counter => counter + 1)
        }
        const handleDown = ()=>{
            if(counter !== 1){
                setCounter(counter => counter - 1)
            }
        }

    // Estado Inicial del carrito
    const [itemsShoes, setItemsShoes] = useState( { cart:[] } );
    
    // Agregado al carrito (ItemListContainer)
    const addToCart = (product) =>{

        const shoes = itemsShoes.cart.find((obj) =>
            obj.id === product.id);

        if(shoes){

            const arr = itemsShoes.cart.map((obj) =>{
                return obj.id === product.id ? {...shoes, qty: shoes.qty + 1} : obj
            })
            setItemsShoes(
                
                {
                    ...itemsShoes,
                    cart: arr 
                }
                
            )
        }
        else{
            setItemsShoes(
                {...itemsShoes.cart, cart: [...itemsShoes.cart, {...product, qty: 1}] }
            )
        }

        setItemsShoes(
            {
                ...itemsShoes , 
                cart: [
                    ...itemsShoes.cart, product
                ]
            }
        )
    }

    // Eliminar del carrito (CartItem)
    const removeFromCart = (product) => {

        setItemsShoes(
            {
                ...itemsShoes,
                cart: itemsShoes.cart.filter( item => {

                    return item.id !== product.id

                    }
                )
                
            }
        )

    }

    // Total de compra carrito (Cart)
    const totalPrice = () =>{

        let total = 0;

        for (let i = 0; i < itemsShoes.cart.length; i++) {

            const product = itemsShoes.cart[i].price;

            total = product + total
            
        }

        return total
    }



    return {
        itemsShoes,
        addToCart,
        removeFromCart, 
        totalPrice,
        counter,
        handleDown,
        handleUp
    }
}



export default useCartState;