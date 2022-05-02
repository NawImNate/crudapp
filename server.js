const express = require("express");
const Employee = require("./dbFiles/employee");
const dbOperation = require("./dbFiles/dbOperation");
const cors = require("cors");

// const express = require("express");
// const cors = require("cors");

// const API_PORT = process.env.PORT || 5000;
// const app = express();

// app.use(cors());

let Pam = new Employee(1002, "Pam", "Beasley", 29, "Female");

dbOperation.createEmployee(Pam);

dbOperation.getEmployees().then((res) => {
  console.log(res.recordset);
});

// app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

// app.get("/api", (req, res) => {
//   console.log("Called");
//   res.send({ result: "Ayoo" });
// });

// app.get("/quit", (req, res) => {
//   console.log("quit");
//   res.send({ result: "Bye" });
// });
