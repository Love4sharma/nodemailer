const nodemailer = require("nodemailer"); 
const sendEmail=async(req,res)=>{

// connect with smtp server
const transporter = nodemailer.createTransport({
     service:'gmail'
     auth:{
            user:"www.lovesharma2004@gmail.com",
            password:""
     }
  });

  let info=await transporter.sendMail({
      from: '"love sharma" <love@gmail.com>', // sender address
      to: "www.lovesharma2004@gmail.com", // list of receivers
      subject: "Hello love", // Subject line
      text: "Hello love", // plain text body
      html: "<b>Hello love</b>", // html body
  })

  console.log(info);

      res.json(info);

}

module.exports =sendEmail;