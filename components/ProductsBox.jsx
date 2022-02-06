import React from 'react';
import "./ProductsBox.css";
import Products from './Products';

const ProductsBox = () => {
  return (
    <>
        <hr className='newHr'/>
        <div className="listBox">
        <Products/>
        </div>        

    </>  
  );
};

export default ProductsBox;