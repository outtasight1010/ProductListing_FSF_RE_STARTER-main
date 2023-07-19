import React, { useState } from 'react';
import "./App.css";
import data from './data/data.json';
import NavBar from './Components/NavBar/NavBar';
import ProductCard from './Components/ProductCard/ProductCard';
import ProductShop from './Components/ProductShop/ProductShop';
//import PRODUCTS from './products';
import Product from './Components/ProductShop/Product';



//import ProductCard from './Components/ProductCard/ProductCard';
//import ProductList from './Components/ProductList/ProductList';

function App()  {
  console.log(data);
  const products = [{data}];
  const [allProducts, setAllProducts] = useState(data);
  const handleButtonClick = () => {
    setAllProducts({data}
   );
  };

  return (
    
    <div>
      <NavBar/>
      <h2>Product catalog</h2>
      
        <hr 
        size="10"
        color= 'black'
        align= 'center'
        width="1400px">
        </hr>
      <br></br>
      
        
      <ProductShop/>
      <ProductCard/>
      <div>
        
      </div>
            
          
            
          
      </div>
    
   );
};

export default App;
