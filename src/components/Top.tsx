'use client';
import Image from 'next/image';
import iconImage from '../../public/icon.jpg';
import jisui6Image from '../../public/jisui6.png';
import soramojiImage from '../../public/soramoji.jpg';
import rmImage from '../../public/reportmanager_connected.png';
import vfImage from '../../public/virtualfitting_icon.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

const Top = () => {
  return (
    <section
      id="top"
      className="w-11/12 md:w-4/5 m-5 mt-24 md:grid md:grid-rows-2 md:grid-cols-3 gap-3 md:gap-5 box-border"
    >
      {/* Iconカード */}
      <div className="my-3 p-4 row-span-2 bg-primary rounded-3xl flex flex-col items-center shodow-2xl hover:scale-[1.01]">
        <div className="text-secondary text-base w-full md:mb-20">Icon</div>
        <Image
          src={iconImage}
          height={120}
          width={120}
          alt="アイコン画像"
          className="rounded-full m-5"
        />
        <div className="text-white md:text-xl md:m-5 text-sm md:text-md">
          こんにちは。<div className="font-bold inline">keigo-u</div>は<br />
          Webアプリ、iOSアプリを
          <br />
          開発しているエンジニアです。
          <br />
        </div>
      </div>
      {/* Profileカード */}
      <div className="my-3 p-4 col-span-2 bg-primary rounded-3xl flex flex-col items-center shadow-2xl hover:scale-[1.01]">
        <div className="text-secondary text-base w-full">Profile</div>
        <div className="text-white md:text-xl md:m-8">
          現在沖縄に住んでいる大学4年生。小学生の頃からプログラミングに興味があり、
          高専にて情報学を学びました。その後大学に編入し、プログラミングスクールの
          メンターとしてアルバイトをこなしながら個人開発を行っています。
          趣味は自炊と洋服とスマブラです！最近はアルバイトで稼いだお金のほとんどを
          服で使い切ってしまうのが悩みです。
        </div>
      </div>
      {/* Worksカード */}
      <div className="my-3 p-4 bg-primary rounded-3xl flex flex-col items-center shadow-2xl hover:scale-[1.01] col-span-2 md:col-span-1">
        <div className="text-secondary text-base w-full">Works</div>
        <Splide
          aria-label="制作物の写真"
          options={{
            autoplay: true, // 自動再生を有効
            interval: 3000, // 自動再生の間隔を3秒に設定
          }}
        >
          <SplideSlide>
            <Image
              src={jisui6Image}
              alt="Jisui6画像"
              className="object-cover w-full md:h-full rounded-md"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={soramojiImage}
              alt="Soramoji画像"
              className="object-cover w-full h-full rounded-md"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={rmImage}
              alt="ReportManager画像"
              className="object-cover w-full h-full rounded-md"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={vfImage}
              alt="VirtualFitting画像"
              className="object-cover w-full h-full rounded-md"
            />
          </SplideSlide>
        </Splide>
      </div>
      {/* Linksカード */}
      <div className="my-3 p-4 bg-primary rounded-3xl flex flex-col items-center shadow-2xl hover:scale-[1.01] md:col-span-1">
        <div className="text-secondary text-base w-full">Links</div>
        <div className="flex flex-start flex-wrap m-7 justify-center items-center">
          <a
            href="https://twitter.com/keigoQ4AXfu7z"
            className="flex flex-col flex-start items-center m-1 rounded hover:ring"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/icons8-twitterx-96.png"
              width={80}
              height={80}
              alt="twitterIcon"
              sizes="20%"
            />
            <div className="text-white text-sm">@keigoQ4AXfu7z</div>
          </a>
          <a
            href="https://www.instagram.com/k5.u_555/"
            className="flex flex-col flex-start items-center m-1 px-2 rounded hover:ring"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/icons8-インスタグラム-96.png"
              width={80}
              height={80}
              alt="instagramIcon"
              sizes="50%"
            />
            <div className="text-white text-sm">@k5.u_555</div>
          </a>
          <a
            href="https://github.com/keigo-u"
            className="flex flex-col flex-start items-center m-1 px-2 rounded hover:ring"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/icons8-github-100.png"
              width={80}
              height={80}
              alt="githubIcon"
              sizes="50%"
            />
            <div className="text-white text-sm">@keigo-u</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Top;
