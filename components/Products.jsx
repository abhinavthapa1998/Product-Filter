import React from "react";
import { useState, useEffect } from "react";
import "./Products.css";
import Product from "./Product";

const Products = () => {
  
  const url = "https://assessment-edvora.herokuapp.com/";
  const [loading, setLoading] = useState(true);
  const [prods, setProd] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProd(data);
        setLoading(false);
      });
  };

  const showData = () => {
    let productarr = Object.keys(prods); 
    return(
    <div className="product_array">
      {productarr.map((pa, i) => {
        <Product key={i} index={i} prod={prods} />
      })}
    </div>)
  };
  return (
  <>
  {loading ? console.log("Data is loading") : showData()}
  </>
  )
};

export default Products;
