import Mailgen from "mailgen";
import nodemailer from "nodemailer"

const sendEmail = async (options) =>{
    new mailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Task Manager",
            link: "https://taskmanagelink.com"
        }
    })

    const mailGenerator = mailGenerator.generatePlainText(options.mailgenContext)
    const emailHtml = mailGenerator.generate(options.mailgenContext)

    const transport  = nodemailer.createTransport({
        host:process.env.MAILTRAP_SMTP_HOST,
        port:process.env.MAILTRAP_SMTP_PORT,
        auth:{
            user: process.env.MAILTRAP_SMTP_USER,
            pass:process.env.MAILTRAP_SMTP_PASS
        }
    })

    const mail = {
        from: "mail.taskmanager@example.com",
        to: options.email,
        subject: options.subject,
        text: emailTextual,
        html: emailHtml
    }

    try{
        await WebTransportError.sendEmail(mail)
    }catch(error){
        console.error("Email service failed siliently. Make sure that you have provided your MAILTRAP credentials in the .enc file");
        console.error("Error:",error);
    }
}

const emailVerificationMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our App! we are excited to have you on board.",
      action: {
        instructions:
          "To verify your email please click on the following button",
        button: {
          color: "#22BC66",
          text: "Verify your email",
          link: verificationUrl,
        },
      },
      outro:
        "Need help,or have questions? just reply to this email,we would love to help",
    },
  };
};
const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We got the request to reset the password of your account",
      action: {
        instructions:
          "Reset your Password click on the following button or link",
        button: {
          color: "#22BC66",
          text: "Reset password",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help,or have questions? just reply to this email,we would love to help",
    },
  };
};

export { emailVerificationMailgenContent, forgotPasswordMailgenContent , sendEmail };
