'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Link as Scroll } from 'react-scroll';
import iconImage from '../../public/icon.jpg';
import jisui6Image from '../../public/jisui6.png';
import soramojiImage from '../../public/soramoji.jpg';
import rmImage from '../../public/reportmanager_connected.png';
import vfImage from '../../public/virtualfitting_icon.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import LifeChart from '@/components/LifeChart';
import {
  IconDatabase,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconId,
  IconMenu2,
  IconServer,
  IconSquareRoundedX,
  IconTool,
} from '@tabler/icons-react';
import Contact from '@/components/Contact';
import { Toaster } from 'react-hot-toast';
import { FadeInBottom } from '@/components/FadeInBottom';
import { useState } from 'react';
import { createSocket } from 'dgram';

const createLevelStars = (num: number): string => {
  var stars = '☆☆☆☆☆';
  const _ = [...Array(num)].forEach(() => (stars = stars.replace('☆', '★')));
  return stars;
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleIsMenuOpen = () => {
    setIsMenuOpen((prev) => {
      if (!prev) {
        document.documentElement.style.overflow = "hidden";
      } else {
        document.documentElement.style.overflow = "scroll";
      }
      return !prev
    })
  }
  return (
    <div id='content' className="min-h-screen min-w-full bg-gray-50 flex flex-col items-center box-border">
      {/* ヘッダーセクション */}
      <header className="w-4/5 m-5 p-5 flex justify-between bg-primary md:text-lg text-gray-50 rounded-full shadow-xl fixed top-0 z-10">
        <Link href="/" className="font-semibold">
          keigo-uのポートフォリオ
        </Link>
        <ul className="md:flex hidden">
          <li className="pr-4 hover:underline">
            <Scroll to="top" offset={-110} smooth>
              TOP
            </Scroll>
          </li>
          <li className="pr-4 hover:underline">
            <Scroll to="mylife" offset={-110} smooth>
              MyLife
            </Scroll>
          </li>
          <li className="pr-4 hover:underline">
            <Scroll to="skill" offset={-110} smooth>
              SKILL
            </Scroll>
          </li>
          <li className="pr-4 hover:underline">
            <Scroll to="works" offset={-110} smooth>
              WORKS
            </Scroll>
          </li>
          <li className="pr-4 hover:underline">
            <Scroll to="contact" offset={-110} smooth>
              CONTACT
            </Scroll>
          </li>
        </ul>

        <button className='md:hidden' onClick={toggleIsMenuOpen}>
          <IconMenu2 />
        </button>
      </header>
      {isMenuOpen ? (
        <div className='fixed top-0 left-0 z-20 bg-primary min-h-screen min-w-full flex flex-col'>
          {/* <button onClick={toggleIsMenuOpen} className='absolute top-0 m-8 z-20'>
            <IconSquareRoundedX width={50} height={50} className='text-white font-thin'/>
          </button>

          <ul className="flex flex-col mb-20 absolute bottom-0 text-2xl text-white font-bold text-right">
            <li className="p-4 text-xl hover:underline">
              <Scroll to="top" offset={-110} smooth>
                トップ TOP
              </Scroll>
            </li>
            <li className="p-4 text-xl hover:underline">
              <Scroll to="mylife" offset={-110} smooth>
                生い立ち MyLife
              </Scroll>
            </li>
            <li className="p-4 text-xl hover:underline">
              <Scroll to="skill" offset={-110} smooth>
                スキルセット SKILL
              </Scroll>
            </li>
            <li className="p-4 text-xl hover:underline">
              <Scroll to="works" offset={-110} smooth>
                成果物 WORKS
              </Scroll>
            </li>
            <li className="p-4 text-xl hover:underline">
              <Scroll to="contact" offset={-110} smooth>
                お問い合わせ CONTACT
              </Scroll>
            </li>
          </ul> */}
        </div>
      ) : undefined}

      {/* TOPセクション */}
      <section
        id="top"
        className="w-4/5 m-5 mt-24 md:grid md:grid-rows-2 md:grid-cols-3 gap-3 md:gap-5 box-border"
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
                sizes='20%'
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
                sizes='50%'
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
                sizes='50%'
              />
              <div className="text-white text-sm">@keigo-u</div>
            </a>
          </div>
        </div>
      </section>

      {/* 生い立ちセクション */}
      <section id="mylife" className="w-4/5 m-5">
        <div className="text-3xl font-bold drop-shadow-md">生い立ち MyLife</div>
        <LifeChart />
      </section>

      {/* スキルセットセクション */}
      <section id="skill" className="w-4/5 m-5 box-border">
        <div className="text-3xl font-bold drop-shadow-md">
          スキルセット SKILL
        </div>

        <div className="md:grid md:grid-rows-2 md:grid-cols-3 md:gap-5">
          {/* フロントエンド */}
          <FadeInBottom>
            <div className="bg-primary rounded-3xl text-center text-secondary my-3 p-3 hover:scale-[1.01]">
              <div className="flex justify-center items-center mx-2 my-4">
                <IconDeviceDesktop width={30} height={30} />
                <div className="text-xl md:text-3xl">フロントエンド</div>
              </div>
              <div className="text-white text-sm md:text-base my-4">
                直近ではNext.JSを用いた開発を行っていました
              </div>
              <table className="w-full my-4">
                <thead>
                  <tr>
                    <th>技術</th>
                    <th>経験年数</th>
                    <th>レベル</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  <tr>
                    <td>HTML</td>
                    <td>2年</td>
                    <td>★★★☆☆</td>
                  </tr>
                  <tr>
                    <td>Tailwind</td>
                    <td>1年</td>
                    <td>★★★☆☆</td>
                  </tr>
                  <tr>
                    <td>JavaScript</td>
                    <td>2年</td>
                    <td>★★★★☆</td>
                  </tr>
                  <tr>
                    <td>JavaScript</td>
                    <td>2年</td>
                    <td>★★★★☆</td>
                  </tr>
                  <tr>
                    <td>TypeScript</td>
                    <td>半年</td>
                    <td>★★★☆☆</td>
                  </tr>
                  <tr>
                    <td>jQuery</td>
                    <td>半年</td>
                    <td>★★☆☆☆</td>
                  </tr>
                  <tr>
                    <td>React</td>
                    <td>半年</td>
                    <td>★★★☆☆</td>
                  </tr>
                  <tr>
                    <td>Next.JS</td>
                    <td>半年</td>
                    <td>★☆☆☆☆</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInBottom>

          {/* バックエンド */}
          <FadeInBottom>
          <div className="bg-primary rounded-3xl text-center text-secondary my-3 p-3 hover:scale-[1.01]">
            <div className="flex justify-center items-center mx-2 my-4">
              <IconServer width={30} height={30} />
              <div className="text-xl md:text-3xl">バックエンド</div>
            </div>
            <div className="text-white text-sm md:text-base my-4">
              アルバイトではLaravelアプリ開発を教えています
            </div>
            <table className="w-full my-4">
              <thead>
                <tr>
                  <th>技術</th>
                  <th>経験年数</th>
                  <th>レベル</th>
                </tr>
              </thead>
              <tbody className="text-white">
                <tr>
                  <td>Laravel</td>
                  <td>1年</td>
                  <td>★★★★☆</td>
                </tr>
                <tr>
                  <td>Flask</td>
                  <td>半年</td>
                  <td>★★☆☆☆</td>
                </tr>
              </tbody>
            </table>
          </div>
          </FadeInBottom>

          {/* モバイル */}
          <FadeInBottom>
          <div className="bg-primary rounded-3xl text-center text-secondary my-3 p-3 hover:scale-[1.01]">
            <div className="flex justify-center items-center mx-2 my-4 w-full">
              <IconDeviceMobile width={30} height={30} />
              <div className="text-xl md:text-3xl">モバイル</div>
            </div>
            <div className="text-white text-sm md:text-base my-4">
              直近ではSwift UIを用いた開発を行っていました
            </div>
            <table className="w-full my-4">
              <thead>
                <tr>
                  <th>技術</th>
                  <th>経験年数</th>
                  <th>レベル</th>
                </tr>
              </thead>
              <tbody className="text-white">
                <tr>
                  <td>Swift(UIKit)</td>
                  <td>1年</td>
                  <td>{createLevelStars(3)}</td>
                </tr>
                <tr>
                  <td>Swift(Swift UI)</td>
                  <td>1年</td>
                  <td>{createLevelStars(4)}</td>
                </tr>
                <tr>
                  <td>KMP</td>
                  <td>1ヶ月</td>
                  <td>{createLevelStars(1)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          </FadeInBottom>

          {/* データベース */}
          <FadeInBottom>
          <div className="bg-primary rounded-3xl text-center text-secondary my-3 p-3 hover:scale-[1.01]">
            <div className="flex justify-center items-center mx-2 my-4">
              <IconDatabase width={30} height={30} />
              <div className="text-xl md:text-3xl">データベース</div>
            </div>
            <div className="text-white text-sm md:text-base my-4">
              直近ではmysqlを用いた開発を行っていました
            </div>
            <table className="w-full my-4">
              <thead>
                <tr>
                  <th>技術</th>
                  <th>経験年数</th>
                  <th>レベル</th>
                </tr>
              </thead>
              <tbody className="text-white">
                <tr>
                  <td>MySQL(mariadb)</td>
                  <td>1年</td>
                  <td>{createLevelStars(3)}</td>
                </tr>
                <tr>
                  <td>MongoDB</td>
                  <td>半年</td>
                  <td>{createLevelStars(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          </FadeInBottom>

          {/* その他 */}
          <FadeInBottom>
          <div className="bg-primary rounded-3xl text-center text-secondary my-3 p-3 hover:scale-[1.01]">
            <div className="flex justify-center items-center mx-2 my-4">
              <IconTool width={30} height={30} />
              <div className="text-xl md:text-3xl">その他</div>
            </div>
            <table className="w-full my-4">
              <thead>
                <tr>
                  <th>技術</th>
                  <th>経験年数</th>
                  <th>レベル</th>
                </tr>
              </thead>
              <tbody className="text-white">
                <tr>
                  <td>git</td>
                  <td>2年</td>
                  <td>{createLevelStars(4)}</td>
                </tr>
                <tr>
                  <td>slack</td>
                  <td>2年</td>
                  <td>{createLevelStars(4)}</td>
                </tr>
                <tr>
                  <td>python</td>
                  <td>2年</td>
                  <td>{createLevelStars(3)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          </FadeInBottom>
          {/* 保有資格 */}
          <FadeInBottom>
          <div className="bg-primary rounded-3xl text-center text-secondary my-3 p-3 hover:scale-[1.01]">
            <div className="flex justify-center items-center mx-2 my-4">
              <IconId width={30} height={30} />
              <div className="text-xl md:text-3xl">保有資格</div>
            </div>
            <ul className="mx-4 my-8 text-left text-white">
              <li>基本情報技術者試験</li>
              <li>TOEIC 775点</li>
              <li>普通自動車第一種運転免許（AT限定）</li>
            </ul>
          </div>
          </FadeInBottom>
        </div>
      </section>

      {/* 制作物セクション */}
      <section id="works" className="w-4/5 m-5">
        <div className="text-3xl font-bold drop-shadow-md">制作物 WORKS</div>

        <FadeInBottom>
        <div className="md:grid md:grid-rows-2 md:grid-cols-2 md:gap-5 my-3">
          {/* Jisui6 */}
          <div className="bg-primary rounded-3xl my-3 p-4 hover:scale-[1.01]">
            <div className="text-3xl text-secondary font-bold">Jisui6</div>
            <div className="md:flex md:justify-around m-2">
              <div className="flex flex-wrap items-start">
                <Image
                  src="/icons8-php-96.png"
                  width={50}
                  height={50}
                  alt="php"
                />
                <Image
                  src="/icons8-ララヴェル-96.png"
                  width={50}
                  height={50}
                  alt="laravel"
                />
                <Image
                  src="/icons8-react-native-96.png"
                  width={50}
                  height={50}
                  alt="react"
                />
                <Image
                  src="/icons8-typescript-96.png"
                  width={50}
                  height={50}
                  alt="typescript"
                />
                <Image
                  src="/icons8-heroku-96.png"
                  width={50}
                  height={50}
                  alt="heroku"
                />
                <Image
                  src="/icons8-mysql-ロゴ-96.png"
                  width={50}
                  height={50}
                  alt="mysql"
                />
              </div>
              <Image
                src={jisui6Image}
                alt="Jisui6"
                width={400}
                height={280}
                className="rounded-md"
              />
            </div>
            <div className="text-white mx-8 my-2 font-semibold">
              毎日の自炊を記録、共有するアプリケーションです。作った料理の画像を
              アップロードして管理でき、その時の料理一つひとつにレシピや参考にした
              リンク、食材などのメモを取ることができます。
              また他の人の投稿を見ることができ、料理のアイデアを得ることができます。
            </div>
            <div className="my-2 text-right text-orange-400 text-sm underline hover:text-orange-300">
              <a
                href="https://jisui6-700305e97f73.herokuapp.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                {'>>'}リンクはこちら
              </a>
            </div>
            <div className="my-2 text-right text-orange-400 text-sm underline hover:text-orange-300">
              <a
                href="https://github.com/keigo-u/jisuiroku"
                target="_blank"
                rel="noreferrer noopener"
              >
                {'>>'}GitHubリポジトリはこちら
              </a>
            </div>
          </div>

          {/* Soramoji */}
          <div className="bg-primary rounded-3xl my-3 p-4 hover:scale-[1.01]">
            <div className="text-3xl text-secondary font-bold">Soramoji</div>
            <div className="md:flex md:justify-around m-2">
              <div className="flex flex-wrap items-start">
                <Image
                  src="/icons8-typescript-96.png"
                  width={50}
                  height={50}
                  alt="typescript"
                />
                <Image
                  src="/icons8-ejs-96.png"
                  width={50}
                  height={50}
                  alt="ejs"
                />
                <Image
                  src="/icons8-tensorflow-96.png"
                  width={50}
                  height={50}
                  alt="tensorflow"
                />
                <Image
                  src="/icons8-アマゾンウェブサービス-96.png"
                  width={50}
                  height={50}
                  alt="aws"
                />
              </div>
              <Image
                src={soramojiImage}
                alt="Soramoji"
                width={400}
                height={280}
                className="rounded-md"
              />
            </div>
            <div className="text-white mx-8 my-2 font-semibold">
              小学生に向けた漢字学習ARWebアプリケーションです。
              漢字を空中に書く”空書き”の動作からアイデアを得ました。
              体を使って学習を進めることで楽しく効率的に覚えることができます。
            </div>
            <div className="my-2 text-right text-orange-400 text-sm underline hover:text-orange-300">
              <a
                href="https://main.d3ur3rakiel3gv.amplifyapp.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                {'>>'}リンクはこちら
              </a>
            </div>
            <div className="my-2 text-right text-orange-400 text-sm underline hover:text-orange-300">
              <a
                href="https://github.com/keigo-u/Soramoji"
                target="_blank"
                rel="noreferrer noopener"
              >
                {'>>'}GitHubリポジトリはこちら
              </a>
            </div>
          </div>

          {/* ReportManager */}
          <div className="bg-primary rounded-3xl my-3 p-4 hover:scale-[1.01]">
            <div className="text-3xl text-secondary font-bold">
              ReportManager
            </div>
            <div className="md:flex md:justify-around m-2">
              <div className="flex flex-wrap items-start">
                <Image
                  src="/icons8-swiftui-96.png"
                  width={50}
                  height={50}
                  alt="swiftui"
                />
                <Image
                  src="/icons8-mongodb-96.png"
                  width={50}
                  height={50}
                  alt="mongodb"
                />
              </div>
              <Image src={rmImage} alt="ReportManager" className="rounded-md" />
            </div>
            <div className="text-white mx-8 my-2 font-semibold">
              時間割、課題管理と大学生に必須な機能を備えたアプリです。
              同じ大学のユーザーであれば、他のユーザーが追加した課題を確認すること
              ができ、詳細を記入せずとも自分のタスクとして追加することができます。
            </div>
            <div className="my-2 text-right text-orange-400 text-sm underline hover:text-orange-300">
              <a
                href="https://github.com/keigo-u/ReportManager"
                target="_blank"
                rel="noreferrer noopener"
              >
                {'>>'}GitHubリポジトリはこちら
              </a>
            </div>
          </div>

          {/* VirtualFitting */}
          <div className="bg-primary rounded-3xl my-3 p-4 hover:scale-[1.01]">
            <div className="text-3xl text-secondary font-bold">
              VirtualFitting
            </div>
            <div className="md:flex md:justify-around m-2">
              <div className="flex flex-wrap items-start">
                <Image
                  src="/icons8-swift-96.png"
                  width={50}
                  height={50}
                  alt="swiftui"
                />
              </div>
              <Image
                src={vfImage}
                alt="VirtualFitting"
                width={200}
                height={200}
                className="rounded-md"
              />
            </div>
            <div className="text-white mx-8 mt-12 font-semibold">
              洋服をオンラインで購入する際の課題として試着をするこができないという
              問題があります。その課題を解決するために、画像の情報から仮想的に試着が
              行えるアプリケーションを開発しました。鏡越しに自身の体を写すことで
              少ないスペースでバーチャルフィッティングを行うことができます。
            </div>
            <div className="my-2 text-right text-orange-400 text-sm underline hover:text-orange-300">
              <a
                href="https://github.com/keigo-u/VirtualFitting"
                target="_blank"
                rel="noreferrer noopener"
              >
                {'>>'}GitHubリポジトリはこちら
              </a>
            </div>
          </div>
        </div>
        </FadeInBottom>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className="w-4/5 m-5">
        <div className="text-3xl font-bold drop-shadow-md">
          お問い合わせ CONTACT
        </div>
        <Contact />
      </section>

      {/* フッターセクション */}
      <footer className="w-4/5 m-5 p-5 flex justify-between items-center bg-primary rounded-full shadow-xl">
        <Link href="/" className="hidden md:block font-semibold text-lg text-gray-50">
          keigo-uのポートフォリオ
        </Link>
        <div className='w-full md:w-auto text-right'>
          <div>all rights reserved. @2023</div>
          <div className="text-sm">
            Icons by{' '}
            <a
              href="https://icons8.jp/"
              className="underline"
              target="_blank"
              rel="noreferrer noopener"
            >
              Icons8
            </a>
          </div>
        </div>
      </footer>

      <Toaster position="top-right" />
    </div>
  );
}
