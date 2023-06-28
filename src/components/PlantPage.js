import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants]=useState([])
  const [search, setSearch]=useState("")
  const [form, setForm]=useState({
    name:"",
    image:"",
    price: ""
  })

  useEffect(()=>{
    fetch('http://localhost:6001/plants')
    .then(res=>res.json())
    .then(data=>setPlants(data))
  },[])

  //POST
  function handleSubmit(event){
    event.preventDefault()
    fetch('http://localhost:6001/plants',{
      method: "POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        "name": form.name,
        "image":form.image,
        "price":form.price
      })
    })
    setPlants([...plants,form])
    setForm({
      name:"",
     image:"",
     price: ""
    })
  }
  function handleChange(event){
    const name= event.target.name
    let value= event.target.value

    setForm({...form, [name]:value})
  }
  
  //Search
  function handleSearch(event){
    setSearch(event.target.value)
  }
  const searchPlants=plants.filter((plantObj)=>{
    if(search === "") {return plantObj}
    return plantObj.name.includes(search)
  })

  return (
    <main>
      <NewPlantForm form={form} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Search onSearch={handleSearch}/>
      <PlantList passPlants={searchPlants}/>
    </main>
  );
}

export default PlantPage;
