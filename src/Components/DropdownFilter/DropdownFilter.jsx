import React, { useState } from 'react';
//import ProductCard from './ProductCard';
import products from '../ProductCard/products';

const DropdownFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState('Category'); 
  const filterOptions = ['All','Laptops', 'Smartphones', 'Electronics', 'Fragrances','Skincare','Groceries','Home Decoration']; 

  
  const filteredProducts = selectedFilter === 'Category'
    ? products
    : products.filter((product) => product.category === selectedFilter);

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <div>
      {/* Dropdown menu for filtering */}
      <select value={selectedFilter} onChange={handleFilterChange}>
        {filterOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Table to display the filtered products */}
      <table>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.brand}</td>
              <td>{product.stock}</td>
              <td>{product.category}</td>
              <td>{product.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DropdownFilter;
