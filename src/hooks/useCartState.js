import { useState } from "react";

const useCartState = () =>{
    
        // Zona de manejo de incremento y disminución
        const handleUp = (shoe)=>{
            setItemsShoes({
                ...itemsShoes,
                cart: itemsShoes.cart.map((obj) =>{
                    return obj.id === shoe.id ? {...shoe, qty: shoe.qty + 1} : obj
                })
            })
        }
        const handleDown = (shoe)=>{
            setItemsShoes({
                ...itemsShoes,
                cart: itemsShoes.cart.map((obj) =>{
                    if(shoe.qty > 1){
                        return obj.id === shoe.id ? {...shoe, qty: shoe.qty - 1} : obj
                    }
                    else{
                        return obj
                    }

                })
            })
        }

    // Estado Inicial del carrito
    const [itemsShoes, setItemsShoes] = useState( { cart:[] } );
    
    // Agregado al carrito (ItemListContainer)
    const addToCart = (product) =>{

        const shoes = itemsShoes.cart.find((obj) =>
            obj.id === product.id);

        if(shoes){

            setItemsShoes(
                
                {
                    ...itemsShoes,
                    cart: itemsShoes.cart.map((obj) =>{
                        return obj.id === product.id ? {...shoes, qty: shoes.qty + 1} : obj
                    })
                }
                
            )

        }
        else{
            setItemsShoes(
                {
                    ...itemsShoes,
                     cart: [...itemsShoes.cart, {...product, qty: 1}] 
                }
            )
        }

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

        let total = 0 ;

        for (let i = 0; i < itemsShoes.cart.length; i++) {

            const product = itemsShoes.cart[i].price*itemsShoes.cart[i].qty;

            total = product + total ;
            
        }

        return total
    }


    return {
        itemsShoes,
        addToCart,
        removeFromCart, 
        totalPrice,
        handleDown,
        handleUp
    }
}



export default useCartState;