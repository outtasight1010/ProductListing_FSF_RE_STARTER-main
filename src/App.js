import React, { useState } from 'react';
import "./App.css";
import data from './data/data.json';
import NavBar from './Components/NavBar/NavBar';
import ProductCard from './Components/ProductCard/ProductCard';
import ProductShop from './Components/ProductShop/ProductShop';
import products from './Components/ProductCard/products';
import Product from './Components/ProductShop/Product';
import SearchBar from './Components/SearchBar/SearchBar';
import ProductList from './Components/ProductList/ProductList';
import Footer from './Components/Footer/Footer';
import DropdownFilter from './Components/DropdownFilter/DropdownFilter';
import AlphabeticalSort from './Components/AlphabeticalSort/AlphabeticalSort';
import ProductPage from './Components/ProductPage/ProductPage';




const App = () => {
  console.log(products);
  


  
  
  //Mapping the products in a new array to display

  //const arrayProductItems = products.map((product) => (
    //<ProductCard key = {product.id} product ={product}/>
    
  //));

  return (

  
  //const [allProducts, setAllProducts] = useState(products);
  //const handleButtonClick = () => {
    //setAllProducts({products}
   //);
  //};

    <div>
      <NavBar/>
      
      <br></br>
      <h2>Michelle's Shop</h2>
      <DropdownFilter/>
      <ProductList products = {products}/>
      <ProductPage/>
      <Footer/>

      </div>
      
  )  
  };
  
  

export default App;
