import React from "react";
import './ProductCard.css';
import products from'./products';



import 'bootstrap/dist/css/bootstrap.css';

const ProductCard = ({product}) => {
    
 
    return (
        <div className="container">
            <div className="card">
                <div className="imgBx">
                <img src ={product.image} alt =""/>
                </div>
                <div className="content">
                    <div className="productName">
                        <h3>{product.title}</h3>
                    </div>
                    <div className="price-rating">
                        <h2>${product.price}</h2>
                    </div>
                    <div className="rating">
                        <i className="fa fa-star" >{product.rating}</i>
                        <i className="fa fa-star" ></i>
                        <i className="fa fa-star" ></i>
                        <i className="fa fa-star" ></i>
                        <i className="fa fa-star" ></i>
                    </div>
                    <div className="product description">
                        <p>{product.description}</p>
                    </div>
                    <div className="product-stock">
                        <p>{product.stock}</p>
                    </div>
                    <div className="product-brand">
                        <p>{product.brand}</p>
                    </div>
                    <div className="product-category">
                        <p>{product.category}</p>
                    </div>
                    <button>Add to cart</button>
                </div>

            </div> 
            
               
        </div>
        
        
     
    );
};

export default ProductCard;