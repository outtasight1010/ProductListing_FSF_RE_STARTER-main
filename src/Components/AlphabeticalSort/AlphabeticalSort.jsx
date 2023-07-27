import React, { useState } from 'react';

const AlphabeticalSort = ({ onSortChange }) => {
  const [selectedSort, setSelectedSort] = useState('name-asc'); 

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
    onSortChange(event.target.value); //  I will then pass the selected sorting option back to the parent component
  };

  return (
    <div>
      <select value={selectedSort} onChange={handleSortChange}>
        <option value="name-asc">Sort by Name (A to Z)</option>
        <option value="name-desc">Sort by Name (Z to A)</option>
      </select>
    </div>
  );
};

export default AlphabeticalSort;
