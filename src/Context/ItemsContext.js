import React, { createContext, useState, useEffect } from "react";
import useCartState from "../hooks/useCartState";
import Show from "../Components/Cart/Show";

// Firebase - Firestore
import { collection, query, getDocs} from 'firebase/firestore' ;
import { db } from '../Firebase/firebaseConfig';

const CartContext = createContext();

export function CartProvider ({children}){

    const cart = useCartState();
    const showCart = Show();

    const [productsData, setProductsData] = useState([]);

    useEffect(() =>{
        const getProducts = async () => {
          const q = query(collection(db, 'Shoes'));
          const docs = [];
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id});
          });
          setProductsData(docs); 
        };
        getProducts();
    }, []);


    const value = {
        cart, 
        showCart,
        productsData,
        setProductsData
    }
 
    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;

