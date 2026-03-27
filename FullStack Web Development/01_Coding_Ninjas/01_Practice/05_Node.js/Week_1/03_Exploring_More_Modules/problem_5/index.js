import http from "http";
import fs from "fs";
import EventEmitter from "events";
import nodemailer from "nodemailer";

class CustomEvent extends EventEmitter {
  mailSent(email) {
    this.emit("mailSent", email);
  }
}

const customEvent = new CustomEvent();

const server = http.createServer((req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "akhil8260851061@gmail.com",
      pass: "oxyhbyiuqepyblqm",
    },
  });

  if (req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      try {
        const { name, email, message } = JSON.parse(data);

        const queryString = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;

        // TODO: Append user query in "queries.txt"
        fs.appendFile("queries.txt", queryString, (err) => {
          if (err) {
            console.log("Error writing to file:", err);
          } else {
            console.log("File was updated");
          }
        });

        // Nodemailer mailOptions
        const mailOptions = {
          from: "codingninjas2k16@gmail.com",
          to: email,
          subject: "Query received",
          text: "We have received your query and will get back to you soon.",
        };

        // TODO: Use Nodemailer to send confirmation email
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("Email sent Failed with error: " + error);
            res.writeHead(500);
            res.end("Failed to send email");
          } else {
            customEvent.mailSent(email);
            res.writeHead(200);
            res.end("Query received");
          }
        });
        // TODO: Emit "mailSent" event
      } catch (parseError) {
        res.writeHead(400);
        res.end("Bad Request: Invalid JSON");
      }
    });
  } else {
    res.end("Welcome to Coding Ninjas!");
  }
});

const Solution = () => {
  customEvent.addListener("mailSent", (email) => {
    console.log("custom event 'mailSent' emitted");
    console.log(
      `confirming that the email has been sent successfully to ${email}`,
    );
  });
};

Solution();
export default server;
export { CustomEvent, Solution };
