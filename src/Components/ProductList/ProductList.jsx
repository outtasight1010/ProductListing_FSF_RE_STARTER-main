import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import SearchBar from '../SearchBar/SearchBar';
import products from '../ProductCard/products';

const ProductList = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
  };

  return (
    <div>
      <SearchBar products={products} onFilter={handleFilter} />
      <div>
        <div className='page'>
          <div className='row'>
            {filteredProducts.map((product) => (
             <ProductCard key={product.id} product={product} />
        ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
