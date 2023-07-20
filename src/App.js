import React, { useState } from 'react';
import "./App.css";
import data from './data/data.json';
import NavBar from './Components/NavBar/NavBar';
import ProductCard from './Components/ProductCard/ProductCard';
import ProductShop from './Components/ProductShop/ProductShop';
import products from './Components/ProductCard/products';
import Product from './Components/ProductShop/Product';



//import ProductCard from './Components/ProductCard/ProductCard';
//import ProductList from './Components/ProductList/ProductList';

const App= () => {
  console.log(products);
  
  //Mapping the products in a new array to display
  const arrayProductItems = products.map((product) => (
    <ProductCard key = {product.id} product ={product}/>
    
  ));

  return (

  
  //const [allProducts, setAllProducts] = useState(products);
  //const handleButtonClick = () => {
    //setAllProducts({products}
   //);
  //};

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
     {arrayProductItems}
    </div>
    
   );
};

export default App;
