
import products from '../ProductCard/products';
import React, {useState} from 'react'





const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      
      if (searchInput.length > 0) {
          products.filter((product) => {
          return product.title.match(searchInput);
      });
      }
    return (
       

        <input
   type="text"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />
        

    );

};







export default SearchBar;

