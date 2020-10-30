const express = require("express");
const cors = require("cors");
const port = 8000;
const db_name = "belt-exam-db";

require("./config/mongoose.config")(db_name);

const app = express();

// Prevent CORS error when making request from react port 3000 to server port 8000
// Error in chrome console: Access to XMLHttpRequest at...
app.use(cors());

//req.body undefined without this!
app.use(express.json());

require("./routes/pet.routes")(app);

app.listen(port, () =>
  console.log(`Listening on port ${port} for Req to Res to.`)
);
