import React from 'react';

const Product = (props) => {
    const {id, title, description, price, rating, stock, brand, category, image} = props.data;

    
    return(
        <div>{title}</div>
    )

    

};



export default Product;