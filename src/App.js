import React, { useState } from 'react';
import "./App.css";
import data from './data/data.json';
import NavBar from './Components/NavBar/NavBar';
import ProductCard from './Components/ProductCard/ProductCard';



//import ProductCard from './Components/ProductCard/ProductCard';
//import ProductList from './Components/ProductList/ProductList';

function App()  {
  console.log(data);
  const [allProducts, setAllProducts] = useState(data);
  const handleButtonClick = () => {
    setAllProducts({data}
   );
  };

  return (
    
    <div>
      <NavBar/>
      <h2>Product catalog</h2>
      
        <hr size="5"
        color= 'black'
        align= 'center'
        width="1400px">
        </hr>
      <br></br>
      <ProductCard product = {allProducts}/>
      <button onClick ={handleButtonClick}>Update Product</button>
      
      
      
    </div>
   
   

    
  );
};

export default App;
