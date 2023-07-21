import React, { useState } from 'react';
import "./App.css";
import data from './data/data.json';
import NavBar from './Components/NavBar/NavBar';
import ProductCard from './Components/ProductCard/ProductCard';
import ProductShop from './Components/ProductShop/ProductShop';
import products from './Components/ProductCard/products';
import Product from './Components/ProductShop/Product';
import SearchBar from './Components/SearchBar/SearchBar';



const App= () => {
  console.log(products);
  const [filterdProducts, setFilteredProducts]=useState([]);
  const handleSearch = (searchTerm) => {
    const filtered = products.filter ((product) => {
      const newProduct = product.title.toLowerCase();
      return newProduct.includes(searchTerm.toLowerCase());
    });
    setFilteredProducts(filtered);
  }
  
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
      
      

     <div></div>
      <SearchBar products = {products} onSearch={handleSearch}/>
      <div className='row'>
        {filterdProducts.length >0
        ? filterdProducts.map((product) => (
          <div className='col=md-4' key = {product.id}>
            <ProductCard product = {product}/>
            </div>
        ))
        :<p></p>}
        
        {arrayProductItems}
        

      </div>
      
      
  


</div>
     
   
    
   );
};

export default App;
