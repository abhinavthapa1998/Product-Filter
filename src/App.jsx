import { useState } from 'react';
import './App.css';
import FilterBox from '../components/FilterBox';
import ProductsBox from '../components/ProductsBox';

function App() {

  return(
    <div className="container">
    <div className="left">
     <FilterBox/>
    </div>
    <div className="right">
      <div className="header">Edvora</div>
      <div className="subHeader">Products</div>
      <ProductsBox/>
      
    </div>
    </div>
)
}

export default App;
