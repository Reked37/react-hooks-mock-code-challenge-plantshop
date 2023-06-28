import React from "react";
import PlantCard from "./PlantCard";

function PlantList({passPlants}) {
  
  return (
    <ul className="cards">
      {passPlants.map((plant)=>{
        return <PlantCard key={plant.name} plantInfo={plant}/>
      })}
      </ul>
  );
}

export default PlantList;
