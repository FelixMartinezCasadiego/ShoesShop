import React from "react";
import '../Cart/Cart.css';
import Card from '../../Components/Img/Prueba1.jpg';

// Context
//import { useContext } from "react";
//import CartContext from "../../Context/ItemsContext";

const Cart = () =>{

    // const {toggleFalse , show1 , show2} = useContext(CartContext);

    //const { itemsShoes } = useContext(CartContext)

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
            <div className='Carts show'>
                <div className='Cart show'>
                    <div className="d-flex justify-content-end mt-2 px-4 closeCart" >
                        {/* <box-icon name='x' size='lg'></box-icon> */}
                        <i className='bx bx-x bx-md'></i>
                    </div>
                    <h2>Cart</h2>
                    <div className="CartItem">
                        {/* Zona donde irían los productos con la suma, resta, etc.. */}
                        <div className="row justify-content-evenly"> 
                            <img className="Img col-auto" src={Card} alt="Imagen zapato" />
                            <div className="col-3">
                                <h6>Title</h6>
                                <h5> $ 2000</h5>
                            </div>
                            <div className="col-1">
                                <div><i className='bx bxs-up-arrow'></i></div>
                                <span>1</span>
                                <div><i className='bx bxs-down-arrow' ></i></div>
                            </div>
                            <div className="col-2 Trash">
                                <i className='bx bxs-trash bx-sm mt-3'></i>
                            </div>
                        </div>
                    </div>
                    <h4 className="mt-4">Total: 2000</h4>
                    <button type="button" className="btn btn-success">Payment</button>
                </div>
            </div>
        </>
    )
}

export default Cart;