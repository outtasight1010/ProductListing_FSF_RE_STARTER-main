import React from './react';
import ProductCard from '../ProductCard/ProductCard';

import data from '../data/data.json';
import 'bootstrap/dist/css/bootstrap.css';

const ProductList = ({products}) => {


    return (
        <div className='container'>
            <div className='row'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>

    );
};

export default ProductList;