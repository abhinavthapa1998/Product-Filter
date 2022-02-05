import React, { useEffect, useState } from 'react';
import "./Product.css";

const Product = (props) => {

let i = parseInt(props.index);

const url = "https://assessment-edvora.herokuapp.com/";
  const [loading, setLoading] = useState(true);
  const [prods, setProd] = useState({});
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData=()=>{
  fetch(url)
  .then(response =>response.json())
  .then((data) =>{
    setProd(data);
    setLoading(false);
  })
}
// let name = prods[i]["product_name"];
// let brand = prods[i]["brand_name"];
// let image = prods[i]["image"];
// let price = prods[i]["price"]
// let desc = prods[i]["discription"];
// let location = prods[i]["address"]["state"];
// let date = (prods[i]["date"]).substring(1,10);

return (
  <>
  {loading?console.log("Data is loading"):
  <div className="product_Container">
    <div className="row1">
    <div className="product_image">
    <img src={prods[i]["image"]}/>
    </div>
    <div className="product_details">
      <div className='name'>{prods[i]["product_name"]}</div>
      <div className='brand'>{prods[i]["brand_name"]}</div>
      <div className='price'>{prods[i]["price"]}</div>
    </div>
    </div>
    <div className="row2">
      <div className="loc">{prods[i]["address"]["state"]}</div>
      <div className="date">{(prods[i]["date"]).substring(1,10)}</div>
    </div>
    <div className="description">{prods[i]["discription"]}</div>
  </div>
  }
  </>
  );
};

export default Product;
