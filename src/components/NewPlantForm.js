import React, {useState} from "react";

function NewPlantForm({form, handleSubmit, handleChange}) {

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={form.name} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} value={form.image} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} value={form.price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
