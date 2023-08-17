import React, { useState } from 'react';
import AlphabeticalSort from '../AlphabeticalSort/AlphabeticalSort'; // Import your SortDropdown component
import products from '../ProductCard/products'; // Import your array of products

const ProductPage = () => {
  const [sortedProducts, setSortedProducts] = useState(products);
  const [sortOption, setSortOption] = useState('name-asc');

  const handleSortChange = (selectedSort) => {
    setSortOption(selectedSort);

    const sortedProductsCopy = [...sortedProducts];
    if (selectedSort === 'name-asc') {
      sortedProductsCopy.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedSort === 'name-desc') {
      sortedProductsCopy.sort((a, b) => b.name.localeCompare(a.name));
    }

    setSortedProducts(sortedProductsCopy);
  };

  return (
    <div>
      <h1>Product Page</h1>
      <AlphabeticalSort products={sortedProducts} onSortChange={handleSortChange} />
      <div className="product-list">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product-card">
            {/* Render your product information here */}
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            {/* ... other product details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
