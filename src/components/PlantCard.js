import React, {useState} from "react";

function PlantCard({plantInfo}) {
  const {id, name, image, price}=plantInfo
  const[stock, setStock]=useState(true)

  function changeStock(){
    setStock(!stock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button className="primary" onClick={changeStock}>In Stock</button>
      ) : (
        <button onClick={changeStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
