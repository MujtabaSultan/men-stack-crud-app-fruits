// Here is where we import modules
// We begin by loading Express
const express = require("express");
const morgan = require("morgan");

const app = express();

//middleware
app.use(morgan("dev"));

// server.js

//routes

// landing page
app.get("/", async (req, res, next) => {
  res.render("index.ejs");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
