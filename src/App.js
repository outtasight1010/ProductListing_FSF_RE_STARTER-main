import React, { useState } from 'react';
import "./App.css";
import data from './data/data.json';
import NavBar from './Components/NavBar/NavBar';

function App() {
  const [allProducts, setAllProducts] = useState(data)
  return (
    <div>
      <NavBar/>
    </div>
  );
}

export default App;
