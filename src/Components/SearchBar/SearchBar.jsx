
import products from '../ProductCard/products';
import React, {useState} from 'react'





const SearchBar = ({products, onSearch}) => {

    
      const [searchTerm, setSearchTerm] = useState("");
      const handleSearch = (e) => {

      setSearchTerm(e.target.value);
      onSearch(e.target.value);
    
    };

   
      
      
    return (
        <div className='search'>
            <input
            type = "text"
            placeholder='Search products...'
            value = {searchTerm}
            onChange={handleSearch}
            />
        </div>

    );
};
       

      
   

export default SearchBar;

