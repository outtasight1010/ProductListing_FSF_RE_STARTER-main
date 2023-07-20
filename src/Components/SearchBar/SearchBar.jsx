
import products from '../ProductCard/products';
import React, {useState} from 'react'





const SearchBar = () => {

    
      const [allProducts, setAllProducts] = useState(products);
      const handleButtonClick = (e) => {

        e.preventDefault();
        setAllProducts({products}
    );
    };

   
      
      if (allProducts.length > 0) {
          products.filter((product) => {
          return product.match(allProducts);
      });
      }
    return (
       

        <input
   type="text"
   placeholder="Search here"
   onChange={handleButtonClick}
   value={allProducts} />
        

    );

};







export default SearchBar;

