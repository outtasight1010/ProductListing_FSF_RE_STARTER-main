import React from "react";
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.css';

const ProductCard = ({product}) => {
    return (
        <div className="col-md-4">
            <div className='card'>
                <img src={product.image} className="card-img-top" alt={product.name}/>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-brand">{product.brand}</p>
                    <p className="card-category">{product.category}</p>
                    <p className="card-stock">{product.stock}</p>
                    <p className="card-rating">{product.rating}</p>
                    <button type="submit">Add to cart</button>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;