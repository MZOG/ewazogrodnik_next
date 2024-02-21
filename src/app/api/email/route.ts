import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
    const { name, email, message } = await request.json();

    const transport = nodemailer.createTransport({
        host: "smtppro.zoho.eu",
        secure: true,
        port: 465,
        authMethod: "LOGIN",
        auth: {
          user: process.env.MY_EMAIL,
          pass: process.env.MY_PASSWORD,
        },
      });

      const mailOptions: Mail.Options = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        cc: email,
        subject: `Wiadomość od ${name}`,
        html: `
        <div>
        <p>Imię:<br><span style="font-weight:600">${name}</span></p>
        <p>Email:<br><span style="font-weight:600">${email}</span></p>
        <p>Wiadomość:<br><span style="font-weight:600">${message}</span></p>
        </div>
        `,
      };

      const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
            if (!err) {
            resolve("Email sent");
            } else {
            reject(err.message);
            }
        });
        });

        try {
            await sendMailPromise();
            return NextResponse.json({ message: "Email sent" });
          } catch (err) {
            return NextResponse.json({ error: err }, { status: 500 });
          }
}