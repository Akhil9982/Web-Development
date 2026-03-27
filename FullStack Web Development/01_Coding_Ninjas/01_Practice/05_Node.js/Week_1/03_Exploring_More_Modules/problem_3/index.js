// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  // Write your code here
  if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const message = `Welcome to Coding Ninjas! Today's quote of the day is ${body}\n`;

      try {
        // append to file
        fs.appendFileSync("data.txt", message);

        // read file
        const data = fs.readFileSync("data.txt", "utf8");

        // print to console
        console.log(data);

        res.end("Data received successfully");
      } catch (err) {
        console.log(err);
        res.end("Error writing file");
      }
    });
  } else {
    res.end("Only POST request allowed");
  }
});

export default server;
