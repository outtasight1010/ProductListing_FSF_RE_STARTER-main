import React from "react";
import './ProductCard.css';

import 'bootstrap/dist/css/bootstrap.css';

const ProductCard = ({product}) => {
    return (
        <div className="col-md-2">
            <div className='card'>
                <div className="card-1">
                    <img src="https://i.dummyjson.com/data/products/1/2.jpg"  className="card-img-top" alt="Apple Iphone 9" />
                    <div className="card-body">
                        <h5 className="card-title">Iphone 9</h5>
                        <p className="card-brand">Apple</p>
                        <p className="card-category">smartphones</p>
                        <p className="card-stock">94</p>
                        <p className="card-rating">4.96 stars</p>
                        <button type="submit" >Add to cart</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;