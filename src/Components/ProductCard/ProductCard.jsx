import React from "react";
import './ProductCard.css';
import products from'./products';



import 'bootstrap/dist/css/bootstrap.css';

const ProductCard = ({product}) => {
    const arrayProductItems = products.map(product =>
        <li key ={product.id}>
          <p><img src={product.image}  className="card-img-top" alt="" /></p>
          <p>{product.title}</p>
          <p>{product.brand}</p>
          <p>{product.category}</p>
          <p>{product.stock}</p>
          <p>{product.rating}</p>
          <button type="submit" >Add to cart</button>




        </li>
        )
    return (
        <div className="products">
           
            <div>{arrayProductItems}</div>
        </div>
        
        
     
    );
};

export default ProductCard;