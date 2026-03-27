// Please don't change the pre-written code

const express = require("express");
const server = express();

// Write your code here
// GET Request
server.get("/", (req, res) => {
  console.log("GET Request");
  res.send("get");
});

// POST Request
server.post("/", (req, res) => {
  console.log("POST Request");
  res.send("post");
});

// PUT Request
server.put("/", (req, res) => {
  console.log("PUT Request");
  res.send("put");
});

// DELETE Request
server.delete("/", (req, res) => {
  console.log("DELETE Request");
  res.send("delete");
});
module.exports = server;
