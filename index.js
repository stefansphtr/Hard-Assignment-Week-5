// TODO 1: Create a server using the express module in the NodeJS application, the port is free, as long as it is accessed using environment variables

const express = require("express");
require("dotenv").config(); // ! Use dotenv to read .env vars into Node

const html_template = require("./emailContent");
const transporter = require("./mailer");

const app = express();
app.use(express.json());

// ! Create a server object

app.post("/send-email", async (req, res) => {
  try {
    let mail_options = {
      from: '"Stefanus Bernard Melkisedek" <stefanusbernardmelkisedek@gmail.com>', // sender address
      to: "stefanusbernardmelkisedek@gmail.com", // list of receivers
      subject: req.body.subject, // Subject line
      html: html_template.getHtmlEmailMessageTemplate(req.body.message), // html body with message
    };

    // Send the email
    const info = await transporter.sendMail(mail_options);
    console.log("Email sent: " + info.response); // ! Log the response
    res.status(201).send("Email has been sent"); // ! Send success status code
  } catch (error) {
    console.log(error); // ! Log the error
    res.status(500).send("Error sending email"); // ! Send error status code
  }
});

// ! Use environment variable for port

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
