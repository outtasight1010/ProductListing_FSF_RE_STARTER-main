import './SearchBar.css';
import products from '../ProductCard/products';
import React from 'react';

const SearchBar = ({ products, onFilter }) => {
  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const filteredProducts = products.filter((product) => {
      // Check if the search query is found in any attribute of the product
      return (
        product.title.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(searchQuery)
        // Add more attributes to search through if needed
      );
    });

    onFilter(filteredProducts);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        onChange={handleSearch}
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

