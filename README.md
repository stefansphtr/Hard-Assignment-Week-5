# README.md

<div align="center">
  <img src="https://user-images.githubusercontent.com/74038190/213910845-af37a709-8995-40d6-be59-724526e3c3d7.gif" width="900">
</div>

## Project Overview

This project is a Node.js application that uses the Express module to create a server. The server is set to run on port 3000 and can be accessed using environment variables. The server receives a URL request at the `/send-email` endpoint using the POST method. The request body should contain JSON with the format `{ "subject": "free", "message": "free" }`. The server then uses the `nodemailer` module to send an email using your Gmail account. The email address should be the same as the one used in your Gmail account.

## Requirements

- Node.js version 6 or newer.
- Express module.
- Nodemailer module.
- dotenv module.
- Gmail account.

## Installation

To install the required modules, run the following command:

```bash
npm install express nodemailer dotenv
```

## Usage

To run the server, use the following command:

```bash
npm start
```

or you can use the following command:

```bash
node index.js
```

> **Important Note:** I'm using `node index.js` because I have a script in my `package.json` file that runs the `index.js` file. If you don't have a script in your `package.json` file, you can use the `npm start` command.

## Code Explanation

The server is created using the Express module. The server listens on port 3000 and can be accessed using environment variables. The server receives a URL request at the `/send-email` endpoint using the POST method. The request body should contain JSON with the format `{ "subject": "free", "message": "free" }`.

The server then uses the `nodemailer` module to send an email using your Gmail account. The email address should be the same as the one used in your Gmail account. The server returns a response with the text "Email has been sent" and a status code of 201.

Here's a summary explanation of the code:

1. The code starts by importing the necessary modules: express, nodemailer, and dotenv.
2. Use the `dotenv` module to load environment variables from a `.env` file into `process.env`.
3. An Express application is created using the `express()` function and stored in the `app` variable.
4. The `express.json()` middleware is added to parse JSON data in the request body.
5. A transporter object is created using the Nodemailer module. It is configured to use the Gmail service and requires the sender's email address and password.
6. A HTML content is defined, which will be used as the body of the email.
7. An Express route is defined for the `/send-email` endpoint using the `app.post()` method. This route handles the logic for sending emails.
8. Inside the route handler, the `mailOptions` object is created, which contains the necessary information for sending the email, such as the sender, recipient, subject, and message.
9. The `transporter.sendMail()` method is called to send the email. If there is an error, it is logged and a 500 status code is sent in the response. If the email is sent successfully, the response is logged and a 201 status code is sent.
10. The server is configured to listen on a specified port, which is either obtained from the environment variable `process.env.PORT` or defaults to port 3000.
11. When the server starts listening, a message is logged to indicate the server is running.

This code sets up a server that can receive requests to send emails. It uses the Express framework for handling routes, the Nodemailer module for sending emails, and dotenv, which shows how to use environment variables to store sensitive information like email credentials and server ports. The server listens to a specified port and responds with appropriate status codes to indicate the success or failure of the email-sending process.

## References

- [Nodemailer](https://nodemailer.com/about/)
- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)

## Quotes

> "Programming isn’t about what you know, it’s about what you can figure out." – Chris Pine
