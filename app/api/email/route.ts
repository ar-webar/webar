import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, name, tel, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    // https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    cc: email,
    subject: `Сообщение от ${name}`,
    text: message,
    html: `<h1>Сообщение от ${name}</h1>
    <p>${message}</p>
    <p>Тедефон для связи ${tel}</p>
    <p>Email для связи ${email}</p>`
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err:any) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
