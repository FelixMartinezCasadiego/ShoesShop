import React from "react";
import '../Cart/Cart.css';
// import Card from '../../Components/Img/Prueba1.jpg';
import CartItem from "./CartItem";

// Context
import { useContext } from "react";
import CartContext from "../../Context/ItemsContext";

const Cart = () =>{

    const value  = useContext(CartContext);

    const total = value.cart.totalPrice();

    // const total = itemsShoes.cart.reduce( ( acc, item)=>{
    //     acc = item.price + acc
    //     return acc
    // }, {} )

    // const getRepeated = (param) => {

    //     return
    // }

    // getRepeated('hoooolaa')  // { 'h': 1, 'o': 4, 'l': 1 , 'a': 2}

     return(
        <>
            <div className={value.showCart.show1}>
                <div className={value.showCart.show2}>
                    <div onClick={value.showCart.toggleMenu} className="d-flex justify-content-end mt-2 px-4 closeCart">
                        <i className='bx bx-x bx-md'></i>
                    </div>
                    <h2>Cart</h2>
                    <div className="CartItem">

                        {value.cart.itemsShoes.cart.map((shoesProduct) =>{
                            return <CartItem shoesProduct={shoesProduct} key={shoesProduct.id} />
                        })}
                    </div>
                    <h4 className="mt-4">Total: ${total} </h4>
                    <button type="button" className="btn btn-success">Payment</button>
                </div>
            </div>
        </>
    )
}

export default Cart;