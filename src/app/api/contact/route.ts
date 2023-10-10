import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// お問い合わせメール送信API
export const POST = async (req: Request, res: NextResponse) => {
  const { name, email, body } = await req.json();
  console.log({ name, email, body });

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

  await trasporter.sendMail(toHostMailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  return NextResponse.json({message: 'success'}, {status:200})
};
