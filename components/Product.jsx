import React from "react";
import "./Product.css";

const Product = (props) => {
  let i = parseInt(props.index);
  let prods = props.prod;
  let name = prods[i]["product_name"];
  let brand = prods[i]["brand_name"];
  let image = prods[i]["image"];
  let price = prods[i]["price"];
  let desc = prods[i]["discription"];
  let location = prods[i]["address"]["state"];
  let date = prods[i]["date"].substring(1, 10);

  return (
    <>
      <div className="product_Container">
        <div className="row1">
          <div className="product_image">
            <img src={image} />
          </div>
          <div className="product_details">
            <div className="name">{name}</div>
            <div className="brand">{brand}</div>
            <div className="price">{price}</div>
          </div>
        </div>
        <div className="row2">
          <div className="loc">{location}</div>
          <div className="date">{date}</div>
        </div>
        <div className="description">{desc}</div>
      </div>
    </>
  );
};

export default Product;
