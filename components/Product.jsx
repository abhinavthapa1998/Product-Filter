import React from 'react';
import "./Product.css";

const Product = () => {
  return (
  <div className="product_Container">
    <div className="row1">
    <div className="product_image">
    </div>
    <div className="product_details">
      <div className='name'>Product Name</div>
      <div className='brand'>Brand Name</div>
      <div className='price'>$50</div>
    </div>
    </div>
    <div className="row2">
    
      <div className="loc">Location</div>
      <div className="date">Date:</div>
    
    </div>
    <div className="description">Description</div>
  
  </div>
  );
};

export default Product;
