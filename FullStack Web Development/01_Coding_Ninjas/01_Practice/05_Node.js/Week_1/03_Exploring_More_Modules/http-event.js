// 1. Create a server
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.body);
  if (req.method == "POST") {
    // Expecting DATA from client
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      console.log(body);
      res.end("Data is received");
    });
  } else {
    console.log("Function ends here");
    res.end("Welcome to Node JS");
  }
});

server.listen(3100);
console.log("Server is listening on 3100");
