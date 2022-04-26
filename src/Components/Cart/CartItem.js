import { useContext, useState } from "react";
import CartContext from "../../Context/ItemsContext";

const CartItem = ({shoesProduct}) =>{

    const value = useContext(CartContext);
    const {cart} = value;

    return(
        <div className="row justify-content-evenly"> 
            <img className="Img col-auto" src={shoesProduct.image} alt={shoesProduct.title} />
            <div className="col-3">
                <h6> {shoesProduct.title} </h6>
                <h5> $ {shoesProduct.price} </h5>
            </div>
            <div className="col-1">
                <div><i className='bx bxs-up-arrow'  onClick={() => cart.handleUp(shoesProduct)}></i></div>
                <span> {shoesProduct.qty} </span>
                <div onClick={() => cart.handleDown(shoesProduct)}><i className='bx bxs-down-arrow' ></i></div>
            </div>
            <div className="col-2 Trash" onClick={() => value.cart.removeFromCart(shoesProduct)}>
                <i className='bx bxs-trash bx-sm mt-3' ></i>
            </div>
        </div>
    )
}


export default CartItem;