const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      minlength: [3, "Name must be at least {MINLENGTH} characters."],
    },
    type: {
      type: String,
      required: [true, "Type is required."],
      minlength: [3, "Name must be at least {MINLENGTH} characters."],
    },
    desc: {
      type: String,
      required: [true, "Description is required."],
      minlength: [3, "Description must be at least {MINLENGTH} characters."],
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    skill1: {
      type: String,
      minlength: [3, "Skill must be at least {MINLENGTH} characters."],
    },
    skill2: {
      type: String,
      minlength: [3, "Skill must be at least {MINLENGTH} characters."],
    },
    skill3: {
      type: String,
      minlength: [3, "Skill must be at least {MINLENGTH} characters."],
    },
  },
  { timestamp: true }
);

// register our model and enforce the schema
const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
