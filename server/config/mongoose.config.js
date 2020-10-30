const mongoose = require("mongoose");

module.exports = (db_name) => {
  mongoose
    .connect("mongodb://localhost/pets", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log("Established a connection to db"))
    .catch((err) =>
      console.log("Something went wrong when connecting to the db", err)
    );
};
