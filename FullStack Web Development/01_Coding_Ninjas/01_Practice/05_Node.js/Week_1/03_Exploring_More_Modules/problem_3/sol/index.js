// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  //  Write your code here
  if (req.method === "POST") {
    let body = " ";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const message = `Welcome to Coding Ninjas! Today's quote of the day is ${body}\n`;
      // Append so File is not Overwritten
      fs.appendFile("data.txt", message, (err) => {
        if (err) {
          console.log(err);
          res.end("Error Writing File");
          return;
        }
        // Read File and print in terminal
        fs.readFile("data.txt", "utf-8", (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
          res.end("Data is received");
        });
      });
    });
  } else {
    res.end("Data is not received");
  }
});

export default server;
