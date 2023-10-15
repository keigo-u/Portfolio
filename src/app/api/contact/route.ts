import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

// お問い合わせメール送信API
export const POST = async (req: Request, res: NextResponse) => {
  const { name, email, body } = await req.json();

  const trasporter = nodemailer.createTransport({
    // host: 'smtp.google.com',
    // port: 587,
    // secure: false,
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  await new Promise<boolean>((resolve, reject) => {
    trasporter.verify((err, success) => {
      if(err) {
        console.log(err)
        reject(err)
      } else {
        console.log(success)
        resolve(success)
      }
    })
  })

  // 管理人が受け取るデータ
  const toHostMailData = {
    from: email,
    to: 'keigo.u88@gmail.com',
    subject: `[お問い合わせ] ${name}様より`,
    text: `${body} \n Send from ${email}`,
    html: `
      <h2>【名前】</h2>
      <p>${name}</p>
      <h2>【メールアドレス】</h2>
      <p>${email}</p>
      <h2>【お問い合わせ内容】</h2>
      <p>${body}</p>
    `,
  };

  await new Promise<SMTPTransport.SentMessageInfo>((resolve, reject) => {
    trasporter.sendMail(toHostMailData, function (err, info) {
      if (err) {
        console.log(err);
        reject(err)
      } else {
        console.log(info);
        resolve(info)
      }
    });
  })

  return NextResponse.json({ message: 'OK' }, { status: 200 });
};
