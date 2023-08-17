import React from 'react';
import products from '../ProductCard/products';

const AlphabeticalSort = ({ onSortChange }) => {
  const handleSortChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <div>
      <select onChange={handleSortChange}>
        <option value="name-asc">Sort by Name (A to Z)</option>
        <option value="name-desc">Sort by Name (Z to A)</option>
      </select>
    </div>
  );
};

export default AlphabeticalSort;

