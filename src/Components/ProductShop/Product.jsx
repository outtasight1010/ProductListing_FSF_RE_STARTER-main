import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Product = (props) => {
    const {id, title, description, price, rating, stock, brand, category, image} = props.data;

    
    return(
        <div>{title}</div>
    )

    

};



export default Product;