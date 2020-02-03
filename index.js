const express = require("express");

const server = express();

server.use(express.json());

const users = ["Angelo", "Aline", "Alexandre"];

// Route Params:
//
// CRUD
//

// get all users
server.get("/users", (req, res) => {
  return res.json(users);
});

// get one user
server.get("/users/:index", (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});

// create user
server.post("/users", (req, res) => {
  const { name } = req.body;
  users.push(name);

  return res.json(users);
});

// update user
server.put("/users/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

// delete user
server.delete("/users/:index", (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.json(users);
});

// Query Params:
// server.get("/users", (req, res) => {
//   const { name } = req.query;
//   res.json({ name });
// });

server.listen(3000);
