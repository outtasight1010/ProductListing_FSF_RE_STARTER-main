import React, { useState } from 'react';
import "./App.css";
import data from './data/data.json';
import NavBar from './Components/NavBar/NavBar';
import ProductCard from './Components/ProductCard/ProductCard';
import ProductShop from './Components/ProductShop/ProductShop';
import products from './Components/ProductCard/products';
import Product from './Components/ProductShop/Product';
import SearchBar from './Components/SearchBar/SearchBar';



function App() {
  console.log(products);
  const [searchQuery, setSearchQuery]=useState("");
  const [filteredProducts, setFilteredProducts]=useState([]);

  const filterProducts = () => {
    const filtered = products.filter((product) => {
      return (
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery).toLowerCase())

       } );
    };
    setFilteredProducts(filtered);


  
  
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

    <div className='App'>
      <NavBar/>
      <hr 
        size="10"
        color= 'black'
        align= 'center'
        width="1400px">
        </hr>
      <br></br>
      <h2>Michelle's Shop</h2>
      
      

     
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      {searchQuery === "" ? (
        products.map((product) => (
          <ProductCard key = {product.id} product={product}/>
        ))
        
      ) : (
        filteredProducts.map((product) => (
          <ProductCard key = {product.id} product={product}/>

        ))
      )}

      </div>
  
  )  
  };
  
  

export default App;
