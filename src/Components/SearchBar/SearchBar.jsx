
import products from '../ProductCard/products';
import React, {useState} from 'react'





function SearchBar({searchQuery, setSearchQuery})  {

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

   
      
      
    return (
            <input
            type = "text"
            placeholder='Search products...'
            value = {searchQuery}
            onChange={handleInputChange}
            />
        

    );
};
       

      
   

export default SearchBar;

