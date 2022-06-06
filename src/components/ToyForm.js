import React, {useState} from "react";

function ToyForm( {addToy} ) {

  const [formObject, setFormObject] = useState({
    name: "",
    image: "",
  })

  function handleFormChange(e) {
    setFormObject({
      ...formObject,
      [e.target.name] : e.target.value,
    })
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const formToy = {
      ...formObject,
      likes: 0
    }

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(formToy)
    })
    .then(r => r.json())
    .then(addedToy => addToy(addedToy))
  }

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formObject.name}
          onChange={handleFormChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formObject.image}
          onChange={handleFormChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
