const express = require("express");
const router = require("./routes");

const bodyparser = require("body-parser");
const logger = require("morgan");

const app = express();
PORT = 5000;

app.use(bodyparser.json());
app.use((req, res, next) => {
  console.log(`${req.method} and ${req.path}`);
  next();
});

app.use((req, res, next) => {
  console.log(`${req.headers} and ${req.path}`);
  next();
});
app.use((req, res, next) => {
  
  const apikey = req.query;
  console.log(apikey);
  if (apikey) {
    next();
  } else {
    res.status(400).send("Unauthorise");
  }
});
app.use(router);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server stated succesfully at ${PORT}`);
});
