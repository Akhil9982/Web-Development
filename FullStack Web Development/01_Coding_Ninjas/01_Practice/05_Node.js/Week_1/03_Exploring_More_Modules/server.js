const http = require("http");

const server = http.createServer((request, response) => {
  response.write("This is coming from NodeJS Server. ");
  console.log(request.url);
  if (request.url == "/first") {
    return response.end("This is the first response");
  } else {
    response.end("This is the default response");
  }
});

server.listen(3200, (response, request) => {
  console.log("Serveris listening at 3200");
});
