import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, deleteToy, updateLike}) {

  const toysComponent = toys.map((toy) => {
    return (<ToyCard key={toy.id} toy={toy} deleteToy={deleteToy} updateLike={updateLike}/>)
  })

  return (
    <div id="toy-collection">{toysComponent}</div>
  );
}

export default ToyContainer;
