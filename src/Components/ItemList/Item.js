import React from "react";

const Item = ({ productsData }) => {
    return (
        <div class="mx-4 mt-4 row row-cols-1 row-cols-md-1 g-4">
            <div class="col">
                <div class="card">
                    <img src={productsData.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title"> Title: {productsData.title} </h5>
                        <p class="card-text"> Price: {productsData.price} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;

