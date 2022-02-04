import React from 'react';
import "./FilterBox.css";

const FilterBox = () => {
  return (
      <div className="boxContainer">
      <div className="filterHead">Filters</div>
      <hr/>
        <div className="selector">Product</div>
        <div className="selector">State</div>
        <div className="selector">City</div>
      </div>
  );
};

export default FilterBox;