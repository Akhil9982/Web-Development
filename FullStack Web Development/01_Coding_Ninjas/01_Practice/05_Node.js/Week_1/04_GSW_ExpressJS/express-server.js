const express = require("express");

// Create a server.

const server = express();

// Handle default request.

server.get("/", (req, res, next) => {
  console.log("First Middle Ware Hit");
  next();
});

// GET Request

// this route-level middlewares is executed for send requests
server.get("/", (req, res) => {
  res.set("Content-Type", "text/plain");
  res.send("Hello World! This is an Express Server");
});

// POST Request

server.post("/", (req, res) => {
  res.send("POST request received");
});

//PUT Request

server.put("/", (req, res) => {
  res.send("PUT request received");
});

// PATCH Request
server.patch("/", (req, res) => {
  res.send("PATCH request is received");
});

// OPTIONS Request

server.options("/", (req, res) => {
  res.send("OPTIONS request is received");
});

// DELETE Request

server.delete("/", (req, res) => {
  res.send("DELETE request received");
});

// Assign port

server.listen(3200, () => {
  console.log("Server is listening on http://localhost:3200");
});
