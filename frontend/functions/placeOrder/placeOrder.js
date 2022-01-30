const nodemailer = require("nodemailer");

// create a transport for nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.handler = async (event, context) => {
  // Test send an email
  const info = await transporter.sendMail({
    from: "ZOE - Bakery <zoe@example.com>",
    to: "orders@example.com",
    subject: "New order!",
    html: `<p>Your cake is scheduled to be picken up in 24hours</p>`,
  });
  return {
    statusCode: 200,
    body: JSON.stringify(info),
  };
};
