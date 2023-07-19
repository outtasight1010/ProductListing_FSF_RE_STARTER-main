import React, { useState } from 'react';
import "./App.css";
import data from './data/data.json';
import NavBar from './Components/NavBar/NavBar';
import ProductList from './Components/ProductList/ProductList';

//import ProductCard from './Components/ProductCard/ProductCard';
//import ProductList from './Components/ProductList/ProductList';

const App= () => {

  //const [allProducts, setAllProducts] = React.useState(data);

    
  return (
    
    <div>
      <NavBar/>
      <h2>Product catalog</h2>
      
        <hr size="5"
        color=" black"
        align="center"
        width="1400px"></hr>
      <br><br><br></br></br></br><br></br>
      
      
    </div>
   
   

    
  );
};

export default App;
