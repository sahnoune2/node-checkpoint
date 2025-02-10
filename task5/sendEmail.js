const mailer = require("nodemailer");

const transporter = mailer.createTransport({
  service: "gmail",
  auth: {
    user: "seifkik55555@gmail.com",
    pass: "hgqy tbxh vehy ytnt",
  },
});

const mailOptions = {
  from: "seifkik55555@gmail.com",
  to: "wajihkurousagi@gmail.com",
  html: `<h1 style:"color:red">goodmorning </h1>
  <p style="color:blue">trying to test this emailing thing thro js</p>
  <img  style="width:100px; border-radius:25px" src="https://image.petmd.com/files/styles/978x550/public/2024-06/hip-dysplasia-in-dogs.jpg">`,
};

transporter.sendMail(mailOptions, (error) => {
  if (error) throw error;

  console.log("email was sent");
});
