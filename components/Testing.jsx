import React, { useEffect } from 'react';
import { useState } from 'react';


const Testing = (props) => {
  let i = parseInt(props.index);
  const url = "https://assessment-edvora.herokuapp.com/";
  const [loading, setLoading] = useState(true);
  const [prod, setProd] = useState({});
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
  
  return(
    <>
    {loading? console.log("data loading"):console.log(prod[i]["brand_name"])}
    </>
  )
};

export default Testing;