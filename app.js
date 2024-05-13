const express = require("express");
const app = express();
const sendEmail = require("./controller/sendEmail");

app.get("/", (req, res) => {
  res.send("i am a server");
});

app.get("/sendemail", sendEmail);

app.listen("8085", (req, res) => {
  console.log("server started");
});
