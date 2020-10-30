import React, { useState } from "react";

import axios from "axios";
import { navigate } from "@reach/router";

import styles from "./Pets.module.css";

const NewPets = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [errors, setErrors] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPet = {
      name,
      type,
      desc,
    };

    if (skill1 !== "") {
      newPet.skill1 = skill1;
    }

    if (skill2 !== "") {
      newPet.skill2 = skill2;
    }

    if (skill3 !== "") {
      newPet.skill3 = skill3;
    }

    console.log("New pet:", newPet);

    axios
      .post("http://localhost:8000/api/pets", newPet)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
        console.log(err);
      });
  };

  return (
    <div>
      <h3>Know a pet needing a home?</h3>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="">
          <label htmlFor="name" className={`${styles.label}`}>
            Name:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className=""
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <div>
            {errors?.name && (
              <span className="text-danger">{errors.name?.message}</span>
            )}
          </div>
        </div>

        <div className="">
          <label htmlFor="type" className={`${styles.label}`}>
            Type:
          </label>
          <input
            id="type"
            name="type"
            type="text"
            className=""
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
          <div>
            {errors?.type && (
              <span className="text-danger">{errors.type?.message}</span>
            )}
          </div>
        </div>

        <div className="">
          <label htmlFor="desc" className={`${styles.label}`}>
            Description:
          </label>
          <input
            id="desc"
            name="desc"
            type="text"
            className=""
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <div>
            {errors?.desc && (
              <span className="text-danger">{errors.desc?.message}</span>
            )}
          </div>
        </div>

        <br />
        <h4>Skills (optional):</h4>

        <div className="">
          <label htmlFor="skill1" className={`${styles.label}`}>
            Skill 1:
          </label>
          <input
            id="skill1"
            name="skill1"
            type="text"
            className=""
            onChange={(e) => {
              setSkill1(e.target.value);
            }}
          />
          <div>
            {errors?.skill1 && (
              <span className="text-danger">{errors.skill1?.message}</span>
            )}
          </div>
        </div>

        <div className="">
          <label htmlFor="skill2" className={`${styles.label}`}>
            Skill 2:
          </label>
          <input
            id="skill2"
            name="skill2"
            type="text"
            className=""
            onChange={(e) => {
              setSkill2(e.target.value);
            }}
          />
          <div>
            {errors?.skill2 && (
              <span className="text-danger">{errors.skill2?.message}</span>
            )}
          </div>
        </div>

        <div className="">
          <label htmlFor="skill3" className={`${styles.label}`}>
            Skill 3:
          </label>
          <input
            id="skill3"
            name="skill3"
            type="text"
            className=""
            onChange={(e) => {
              setSkill3(e.target.value);
            }}
          />
          <div>
            {errors?.skill3 && (
              <span className="text-danger">{errors.skill3?.message}</span>
            )}
          </div>
        </div>

        <button className={`${styles.btn}`}>Add Pet</button>

        <button
          className={`${styles.btn}`}
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default NewPets;
