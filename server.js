const express = require("express");
const cors = require("cors");

const API_PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

app.get("/api", (req, res) => {
  console.log("Called");
  res.send({ result: "Ayoo" });
});

app.get("/quit", (req, res) => {
  console.log("quit");
  res.send({ result: "Bye" });
});
