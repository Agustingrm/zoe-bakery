const nodemailer = require("nodemailer");

function generateOrderEmail({ order, total }) {
  return `<div>
    <h2>Your Recent Order for ${total}</h2>
    <p>Please note that orders are delayed up to 24 hours. You can pick up your cake from tomorrow at 18h</p>
    <p>Our opening hours are from 8h to 20h.</p>
    <p>Thank you for your order! Enjoy your cake</p>
    <ul>
      ${order
        .map(
          (item) => `<li>
        <img src="${item.thumbnail}" alt="${item.name}"/>
        ${item.size} ${item.name} - ${item.price}
      </li>`
        )
        .join("")}
    </ul>
    <p>Your total is <strong>${total}</strong> due at pickup</p>
    <style>
        ul {
          list-style: none;
        }
    </style>
  </div>`;
}

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
  const body = JSON.parse(event.body);

  // Check if they have filled out the honeypot
  if (body.mapleSyrup) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Boop beep bop zzzzstt good bye" }),
    };
  }
  // Validate the data coming in is correct
  const requiredFields = ["email", "name", "order"];
  for (const field of requiredFields) {
    console.log(`Checking that ${field} is good`);
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Oops! You are missing the ${field} field`,
        }),
      };
    }
  }
  // Checks if the have anything in the order
  if (!body.order.length) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `You haven't selected anything`,
      }),
    };
  }

  // Test send an email
  const info = await transporter.sendMail({
    from: "ZOE - Bakery <zoe@example.com>",
    to: `${body.name} <${body.email}>, orders@example.com`,
    subject: "New order!",
    html: generateOrderEmail({ order: body.order, total: body.total }),
  });
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Success" }),
  };
};
