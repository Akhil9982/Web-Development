const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Welcome to NodeJS Server");
});

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running at ${PORT}`);
// });

server.listen(3100);
console.log("Server is listening on 3100");
