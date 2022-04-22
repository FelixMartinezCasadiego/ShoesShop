import React from "react";
import '../Cart/Cart.css';
import Card from '../../Components/Img/Prueba1.jpg';

const Cart = () =>{

    // const {itemsShoes } = context;

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
            <div className="Carts">
                <div className="Cart">
                    <div>
                        <div className="d-flex justify-content-end mt-2 px-4 X">
                            {/* <box-icon name='x' size='lg'></box-icon> */}
                            <i className='bx bx-x bx-md'></i>
                        </div>
                        <h2>Cart</h2>
                        {/* Zona donde irían los productos con la suma, resta, etc.. */}
                        <div className="row justify-content-evenly"> 
                            <img className="Img col-auto" src={Card} alt="Imagen zapato" />
                            <div className="col-3">
                                <h5>Nombre del zapato</h5>
                                <h5>Precio del zapato</h5>
                            </div>
                            <div className="col-3">
                                <div><i className='bx bxs-up-arrow'></i></div>
                                <span>cantidad de productos</span>
                                <div><i className='bx bxs-down-arrow' ></i></div>
                            </div>
                            <div className="col-2">
                                <i className='bx bxs-trash bx-md'></i>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;