import React, { useState, useEffect } from "react";

import { Link } from "@reach/router";
import axios from "axios";

// import styles from "./Pets.module.css";

const Pets = (props) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets")
      .then((res) => {
        console.log(res.data);
        setPets(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <nav>
        <Link to="/pets/new">add a pet to the shelter</Link>
      </nav>
      <h3>These pets are looking for a good home.</h3>
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
          {pets.map((pet) => {
            return (
              <tr>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td>
                  <Link to={`/pets/${pet._id}`}>Details</Link> {""} | {""}
                  <Link to={`/pets/${pet._id}/edit`}>Edit</Link>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Pets;
