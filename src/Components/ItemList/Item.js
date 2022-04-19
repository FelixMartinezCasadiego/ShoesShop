import React from "react";

// Context
import { useContext } from "react";
import CartContext from "../../Context/ItemsContext";

const Item = ({ productsData }) => {

    const {addToCart} = useContext(CartContext); 

    return (
        <div class="mx-4 mt-4 row row-cols-1 row-cols-md-1 g-4">
            <div class="col">
                <div class="card">
                    <img src={productsData.image} class="card-img-top" alt={productsData.title} />
                    <div class="card-body">
                        <h6 class="card-title"> Name: {productsData.title} </h6>
                        <p class="card-text"> Price: {productsData.price} </p>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-success" type="button" onClick={ () => addToCart()}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;

