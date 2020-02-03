const express = require("express");

const server = express();

server.use(express.json());

const users = ["Angelo", "Aline", "Alexandre"];

//  Middlewares:

//
//  global
//
server.use((req, res, next) => {
  console.time("Request");
  console.log(`Method: ${req.method} - URL: ${req.url}`);

  next();

  console.timeEnd("Request");
});

//
//  local
//
const checkUserExists = (req, res, next) => {
  req.body.name
    ? next()
    : res.status(400).json({ error: "User name is required." });
};

const checkUserInArray = (req, res, next) => {
  users[req.params.index]
    ? next()
    : res.status(400).json({ error: "User does not exists." });
};

//  Route Params:

//
//  CRUD
//

//  get all users
server.get("/users", (req, res) => {
  return res.json(users);
});

//  get one user
server.get("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});

//  create user
server.post("/users", checkUserExists, (req, res) => {
  const { name } = req.body;
  users.push(name);

  return res.json(users);
});

//  update user
server.put("/users/:index", checkUserInArray, checkUserExists, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

//  delete user
server.delete("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.json(users);
});

//  Query Params:
// server.get("/users", (req, res) => {
//   const { name } = req.query;
//   res.json({ name });
// });

server.listen(3000);
