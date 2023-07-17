import react from './react';
import ProductCard from '../ProductCard/ProductCard';

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