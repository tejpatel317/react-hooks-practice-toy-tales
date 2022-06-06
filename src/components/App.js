import React, { useState , useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then((r) => r.json())
    .then((toys) => setToys(toys))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(addedToy) {
    setToys([...toys, addedToy])
  }

  function deleteToy(id) {
    const updatedToys = toys.filter((toy) => 
      id !== toy.id
    )
    console.log(updatedToys)
    setToys(updatedToys)
  }

  function updateLike(updatedObj) {
    const updatedToys = toys.map((toy) => {
      if (updatedObj.id === toy.id) {
        return updatedObj
      } else {
        return toy
      }
    })
    setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} deleteToy={deleteToy} updateLike={updateLike}/>
    </>
  );
}

export default App;
