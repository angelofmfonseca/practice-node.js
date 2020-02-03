const express = require("express");

const server = express();

const users = ["Angelo", "Aline", "Alexandre", "Joaquim", "Alaíde"];

server.get("/users", (req, res) => {
  const { name } = req.query;
  res.send(`Hello, ${name}!!!`);
});

server.get("/users/:index", (req, res) => {
  const { index } = req.params;
  res.send(`Hello, ${users[index]}!!!`);
});

server.listen(3000);
