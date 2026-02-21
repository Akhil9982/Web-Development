// Create a server using NodeJS.

// 1. Import http library/module
const http = require("http");

// 2. Create Server
const server = http.createServer((req, res) => {
  console.log(req.url);
  // res.write("Welcome to my application");
  if (req.url == "/product") {
    // response ends
    return res.end("This is a Product Page");
  } else if (req.url == "/user") {
    res.end("This is User page");
  }
  // modifying the response
  // Here comes the request.
  return res.end("Welcome to Akhil's NodeJS Server");
});

// 3. Specify a port to listen to client's requests.

server.listen(3100, () => {
  console.log("Server is listening on port 3100");
});

// Alternate way to show the listening the port
// console.log("Server is listening on port 3100")
