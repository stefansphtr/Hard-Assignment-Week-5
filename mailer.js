// ! Create a transporter object using the default SMTP transport

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD, // ! Use environment variable for password
  },
});

module.exports = transporter;
