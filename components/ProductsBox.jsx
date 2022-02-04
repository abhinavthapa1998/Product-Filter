import React from 'react';
import "./ProductsBox.css";
import Products from './Products';

const ProductsBox = () => {
  return (
    <>
        <div className="productHead">Product Name</div>
        <hr className='newHr'/>
        <div className="listBox">
        <Products/>
        </div>        

    </>  
  );
};

export default ProductsBox;