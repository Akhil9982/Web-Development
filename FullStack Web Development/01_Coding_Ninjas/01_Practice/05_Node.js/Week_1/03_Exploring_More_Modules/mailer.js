// Import node mailer
const nodemailer = require("nodemailer");
// 2. Configure email and send the mail
async function sendMail() {
  // 1. Create an email transporter
  //   SMTP(Simple Mail Transfer Protocol)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "akhil8260851061@gmail.com",
      pass: "oxyhbyiuqepyblqm",
    },
  });
  //   2. Configure email content
  const mailOptions = {
    from: "akhil8260851061@gmail.com",
    to: "b_akhilkumar@outlook.com",
    subject: "Welcome to NodeJS App",
    text: "This is an email using nodemailer in NodeJS,",
  };
  //   3. Send the Email
  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Email Sent Successfully");
  } catch (error) {
    console.log("Email sent Failed with error:" + error);
  }
}
sendMail();
