import React from "react";
import { Router, Redirect } from "@reach/router";
import "./App.css";

import NotFound from "./views/NotFound";
import Pets from "./views/Pets";
import NewPet from "./views/NewPet";
import PetId from "./views/PetId";
import EditPet from "./views/EditPet";

function App() {
  return (
    <div className="App">
      <nav></nav>
      <h1>Pet Shelter</h1>

      <Router>
        <Pets path="/" />
        <NewPet path="/pets/new" />
        <PetId path="/pets/:id" />
        <EditPet path="/pets/:id/edit" />
        <Redirect from="/pets" to="/" noThrow="true" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
