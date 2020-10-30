import React, { useState, useEffect } from "react";

import axios from "axios";
import { navigate } from "@reach/router";

import styles from "./Pets.module.css";

const EditPet = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    axios
      .put("http://localhost:8000/api/pets/" + props.id)
      .then((res) => {
        setName(res.data.name);
        setType(res.data.type);
        setDesc(res.data.desc);
        setSkill1(res.data.skill1);
        setSkill2(res.data.skill2);
        setSkill3(res.data.skill3);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [props.id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const EditPet = {
      name,
      type,
      desc,
      skill1,
      skill2,
      skill3,
    };

    console.log(EditPet);

    axios
      .put("http://localhost:8000/api/pets/" + props.id, EditPet)
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
      <h3>Edit {name}</h3>
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
            value={name}
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
            value={type}
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
            value={desc}
            id="desc"
            name="desc"
            placeholder="Enter description here."
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

        <div className="">
          <label htmlFor="skill1" className={`${styles.label}`}>
            Skill 1:
          </label>
          <input
            value={skill1}
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
            value={skill2}
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
            value={skill3}
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

        <button className={`${styles.btn}`}>Edit Pet</button>

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

export default EditPet;
