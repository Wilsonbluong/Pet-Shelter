const Pet = require("../models/pet.model");

// export an object that is full of methods
module.exports = {
  // CREATE
  create: function (req, res) {
    console.log("create  method executed");
    Pet.create(req.body)
      .then((pet) => {
        res.json(pet);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  // FIND ALL
  getAll(req, res) {
    console.log("getAll method executed");
    Pet.find()
      .then((pets) => {
        res.json(pets);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // GET ONE
  getOne(req, res) {
    console.log("getOne method executed");
    Pet.findById(req.params.id)
      .then((pet) => {
        res.json(pet);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // DELETE
  delete(req, res) {
    console.log("delete method executed");
    Pet.findByIdAndDelete(req.params.id)
      .then((pet) => {
        res.json(pet);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // UPDATE
  update(req, res) {
    console.log("Update method executed");
    Pet.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    })
      .then((pet) => {
        res.json(pet);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
};
