// external imports
const express = require("express");
const cors = require("cors");
// internal imports
const db=require("./src/db/db");
const routes=require("./src/routes/routes.js");

const app = express();
const port = process.env.PORT || 5000;

// middleware initialize
app.use(cors());
app.use(express.json());

// api routes
app.get("/", (req, res) => {
  res.json("hello");
});

app.use("/api/v1", routes);


// port declaration
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });