import React from "react";
import './ProductCard.css';
import products from'./products';



import 'bootstrap/dist/css/bootstrap.css';

const ProductCard = ({product}) => {
    
 
    return (
        <div className="product-card">
            <img src ={product.image} alt =""/>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>{product.rating}</p>
            <p>{product.stock}</p>
            <p>{product.brand}</p>
            <p>{product.category}</p>
            <button>Add to cart</button>
          
            
               
        </div>
        
        
     
    );
};

export default ProductCard;