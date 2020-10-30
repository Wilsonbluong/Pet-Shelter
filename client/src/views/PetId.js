import React, { useState, useEffect } from "react";
import axios from "axios";

import { navigate, Link } from "@reach/router";

import styles from "./Pets.module.css";

const PetId = (props) => {
  const [pet, setPet] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets/" + props.id)
      .then((res) => {
        //console.log(res)
        setPet(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [props.id]);

  if (pet === null) {
    return "Loading....";
  }

  function handleDelete() {
    axios
      .delete("http://localhost:8000/api/pets/" + props.id)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  return (
    <div>
      <nav>
        <Link to="/">back to home</Link>
      </nav>
      <header className={`${styles.header}`}>
        <h3>Details about: {pet.name}</h3>
        <button
          className={`${styles.btn}`}
          onClick={(event) => {
            handleDelete();
          }}
        >
          Adopt {pet.name}
        </button>
      </header>
      <br />
      <body className={`${styles.body}`}>
        <p>
          <b>Pet Type: </b>
          {pet.type}
        </p>
        <p>
          <b>Description:</b> {pet.desc}
        </p>
        <p>
          <b>Skills:</b>
        </p>
        <ul>
          <li>{pet.skill1}</li>
          <li>{pet.skill2}</li>
          <li>{pet.skill3}</li>
        </ul>
      </body>
    </div>
  );
};

export default PetId;
