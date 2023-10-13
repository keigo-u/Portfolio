'use client';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

type FormData = {
  name: string;
  email: string;
  body: string;
};

const postContact = async (name: string, email: string, body: string) => {
  const res = await fetch(`api/contact`, {
    method: 'POST',
    body: JSON.stringify({ name, email, body }),
    headers: {
      ContentType: 'application/json',
    },
  });

  return res.json();
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      body: '',
    },
  });

  const onSubmit = handleSubmit((data: FormData) => {
    toast.promise(postContact(data.name, data.email, data.body), {
      loading: 'メール送信中です...',
      success: 'メールの送信に成功しました！',
      error: 'メールの送信に失敗しました',
    });

    reset();
  });

  return (
    <div className="my-3 bg-neutral-300 text-center rounded-3xl">
      <div className="text-base md:text-lg px-5 pt-5">
        ご連絡の際は以下のフォームまたは各SNSのDMからどうぞ！
      </div>
      <form
        className="w-full flex flex-col items-center p-5"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          {...register('name', { required: '名前は必須項目です' })}
          placeholder="氏名"
          className="m-2 w-full md:w-1/3 rounded focus:outline-gray-500"
        />
        <span className="text-red-500 text-left w-1/3">
          {errors.name?.message}
        </span>
        <input
          type="email"
          {...register('email', { required: 'メールアドレスは必須項目です' })}
          placeholder="メールアドレス"
          className="m-2 w-full md:w-1/3 rounded focus:outline-gray-500"
        />
        <span className="text-red-500 text-left w-1/3">
          {errors.email?.message}
        </span>
        <textarea
          {...register('body', { required: 'お問い合わせ内容は必須項目です' })}
          className="m-2 w-full md:w-1/3 rounded focus:outline-gray-500"
          placeholder="お問い合わせ内容"
        ></textarea>
        <span className="text-red-500 text-left w-1/3">
          {errors.body?.message}
        </span>
        <input
          type="submit"
          value="送信"
          className="m-2 w-2/3 md:w-1/5 bg-accent text-primary font-semibold rounded-full shadow-lg hover:bg-orange-300"
        />
      </form>
      {/* SNSアイコン */}
      <div className="px-5 pb-5 flex justify-center">
        <a href="https://twitter.com/keigoQ4AXfu7z">
          <Image
            src="/icons8-twitterx-96.png"
            alt="twitter"
            width={70}
            height={70}
          />
        </a>
        <a href="https://www.instagram.com/k5.u_555/">
          <Image
            src="/icons8-インスタグラム-96.png"
            alt="instagram"
            width={70}
            height={70}
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
