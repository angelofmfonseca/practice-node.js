const express = require("express");

const server = express();

server.get("/users", (req, res) => {
  const { name } = req.query;
  res.send(`Hello, ${name}!!!`);
});

server.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Hello, user number ${id}!!!`);
});

server.listen(3000);
