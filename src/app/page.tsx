'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Link as Scroll} from 'react-scroll'
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
  IconServer,
  IconTool,
} from '@tabler/icons-react';
import Contact from '@/components/Contact';
import { Toaster } from 'react-hot-toast';

const createLevelStars = (num: number): string => {
  var stars = '☆☆☆☆☆';
  const _ = [...Array(num)].forEach(() => (stars = stars.replace('☆', '★')));
  return stars;
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* ヘッダーセクション */}
      <header className="w-4/5 m-5 p-5 flex justify-between bg-primary text-lg text-gray-50 rounded-full shadow-xl fixed top-0 z-50">
        <Link href="/" className="font-semibold">keigo-uのポートフォリオ</Link>
        <ul className="flex">
          <li className="pr-4 hover:underline"><Scroll to='top' offset={-110} smooth>TOP</Scroll></li>
          <li className="pr-4 hover:underline"><Scroll to='mylife' offset={-110} smooth>MyLife</Scroll></li>
          <li className="pr-4 hover:underline"><Scroll to='skill' offset={-110} smooth>SKILL</Scroll></li>
          <li className="pr-4 hover:underline"><Scroll to='works' offset={-110} smooth>WORKS</Scroll></li>
          <li className="pr-4 hover:underline"><Scroll to='contact' offset={-110} smooth>CONTACT</Scroll></li>
        </ul>
      </header>

      {/* TOPセクション */}
      <section id='top' className="w-4/5 m-5 mt-24 grid grid-rows-2 grid-cols-3 gap-5">
        {/* Iconカード */}
        <div className="p-4 row-span-2 bg-primary rounded-3xl flex flex-col items-center shodow-2xl">
          <div className="text-secondary text-base w-full mb-20">Icon</div>
          <Image
            src={iconImage}
            height={120}
            width={120}
            alt="アイコン画像"
            className="rounded-full m-5"
          />
          <div className="text-white text-xl m-5">
            こんにちは。<div className="font-bold inline">keigo-u</div>は<br />
            Webアプリ、iOSアプリを
            <br />
            開発しているエンジニアです。
            <br />
          </div>
        </div>
        {/* Profileカード */}
        <div className="p-4 col-span-2 bg-primary rounded-3xl flex flex-col items-center shadow-2xl">
          <div className="text-secondary text-base w-full">Profile</div>
          <div className="text-white text-xl m-8">
            現在沖縄に住んでいる大学4年生。小学生の頃からプログラミングに興味があり、
            高専にて情報学を学びました。その後大学に編入し、プログラミングスクールの
            メンターとしてアルバイトをこなしながら個人開発を行っています。
            趣味は自炊と洋服とスマブラです！最近はアルバイトで稼いだお金のほとんどを
            服で使い切ってしまうのが悩みです。
          </div>
        </div>
        {/* Worksカード */}
        <div className="p-4 bg-primary rounded-3xl flex flex-col items-center shadow-2xl">
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
                className="object-cover w-full h-full rounded-md"
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                src={soramojiImage}
                alt="Jisui6画像"
                className="object-cover w-full h-full rounded-md"
              />
            </SplideSlide>
          </Splide>
        </div>
        {/* Linksカード */}
        <div className="p-4 bg-primary rounded-3xl flex flex-col items-center shadow-2xl">
          <div className="text-secondary text-base w-full">Links</div>
          <div className="flex flex-start flex-wrap m-7 justify-center items-center">
            <a
              href="https://twitter.com/keigoQ4AXfu7z"
              className="flex flex-col flex-start items-center mx-3"
            >
              <Image
                src="/icons8-twitterx-96.png"
                width={96}
                height={96}
                alt="twitterIcon"
              />
              <div className="text-white">@keigoQ4AXfu7z</div>
            </a>
            <a
              href="https://www.instagram.com/k5.u_555/"
              className="flex flex-col flex-start items-center mx-3"
            >
              <Image
                src="/icons8-インスタグラム-96.png"
                width={96}
                height={96}
                alt="instagramIcon"
              />
              <div className="text-white">@k5.u_555</div>
            </a>
            <a
              href="https://www.instagram.com/k5.u_555/"
              className="flex flex-col flex-start items-center mx-3"
            >
              <Image
                src="/icons8-github-100.png"
                width={96}
                height={96}
                alt="githubIcon"
              />
              <div className="text-white">@keigo-u</div>
            </a>
          </div>
        </div>
      </section>

      {/* 生い立ちセクション */}
      <section id='mylife' className="w-4/5 m-5">
        <div className="text-3xl font-bold drop-shadow-md">生い立ち MyLife</div>
        <LifeChart />
      </section>

      {/* スキルセットセクション */}
      <section id='skill' className="w-4/5 m-5">
        <div className="text-3xl font-bold drop-shadow-md">
          スキルセット SKILL
        </div>

        <div className="grid grid-rows-2 grid-cols-3 gap-5 m-3">
          {/* フロントエンド */}
          <div className="bg-primary rounded-3xl text-center text-secondary p-3">
            <div className="flex justify-center items-center mx-2 my-4">
              <IconDeviceDesktop width={30} height={30} />
              <div className="text-3xl">フロントエンド</div>
            </div>
            <div className="text-white my-4">
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

          {/* バックエンド */}
          <div className="bg-primary rounded-3xl text-center text-secondary p-3">
            <div className="flex justify-center items-center mx-2 my-4">
              <IconServer width={30} height={30} />
              <div className="text-3xl">バックエンド</div>
            </div>
            <div className="text-white my-4">
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

          {/* モバイル */}
          <div className="bg-primary rounded-3xl text-center text-secondary p-3">
            <div className="flex justify-center items-center mx-2 my-4 w-full">
              <IconDeviceMobile width={30} height={30} />
              <div className="text-3xl">モバイル</div>
            </div>
            <div className="text-white my-4">
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

          {/* データベース */}
          <div className="bg-primary rounded-3xl text-center text-secondary p-3">
            <div className="flex justify-center items-center mx-2 my-4">
              <IconDatabase width={30} height={30} />
              <div className="text-3xl">データベース</div>
            </div>
            <div className="text-white my-4">
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

          {/* その他 */}
          <div className="bg-primary rounded-3xl text-center text-secondary p-3">
            <div className="flex justify-center items-center mx-2 my-4">
              <IconTool width={30} height={30} />
              <div className="text-3xl">その他</div>
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

          {/* 保有資格 */}
          <div className="bg-primary rounded-3xl text-center text-secondary p-3">
            <div className="flex justify-center items-center mx-2 my-4">
              <IconId width={30} height={30} />
              <div className="text-3xl">保有資格</div>
            </div>
            <ul className="mx-4 my-8 text-left text-white">
              <li>基本情報技術者試験</li>
              <li>TOEIC 775点</li>
              <li>普通自動車第一種運転免許（AT限定）</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 制作物セクション */}
      <section id='works' className="w-4/5 m-5">
        <div className="text-3xl font-bold drop-shadow-md">制作物 WORKS</div>

        <div className="grid grid-rows-2 grid-cols-2 gap-5 my-3">
          {/* Jisui6 */}
          <div className="bg-primary rounded-3xl p-4">
            <div className="text-3xl text-secondary font-bold">Jisui6</div>
            <div className="flex justify-around m-2">
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
              <a href="https://jisui6-700305e97f73.herokuapp.com/">
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
          <div className="bg-primary rounded-3xl p-4">
            <div className="text-3xl text-secondary font-bold">Soramoji</div>
            <div className="flex justify-around m-2">
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
              <a href="https://main.d3ur3rakiel3gv.amplifyapp.com/">
                {'>>'}リンクはこちら
              </a>
            </div>
            <div className="my-2 text-right text-orange-400 text-sm underline hover:text-orange-300">
              <a href="https://github.com/keigo-u/Soramoji">
                {'>>'}GitHubリポジトリはこちら
              </a>
            </div>
          </div>

          {/* ReportManager */}
          <div className="bg-primary rounded-3xl p-4">
            <div className="text-3xl text-secondary font-bold">
              ReportManager
            </div>
            <div className="flex justify-around m-2">
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
              <Image
                src={rmImage}
                alt="ReportManager"
                width={400}
                height={280}
                className="rounded-md"
              />
            </div>
            <div className="text-white mx-8 my-2 font-semibold">
              時間割、課題管理と大学生に必須な機能を備えたアプリです。
              同じ大学のユーザーであれば、他のユーザーが追加した課題を確認すること
              ができ、詳細を記入せずとも自分のタスクとして追加することができます。
            </div>
            <div className="my-2 text-right text-orange-400 text-sm underline hover:text-orange-300">
              <a href="https://github.com/keigo-u/ReportManager">
                {'>>'}GitHubリポジトリはこちら
              </a>
            </div>
          </div>

          {/* VirtualFitting */}
          <div className="bg-primary rounded-3xl p-4">
            <div className="text-3xl text-secondary font-bold">
              VirtualFitting
            </div>
            <div className="flex justify-around m-2">
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
              <a href="https://github.com/keigo-u/VirtualFitting">
                {'>>'}GitHubリポジトリはこちら
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id='contact' className="w-4/5 m-5">
        <div className="text-3xl font-bold drop-shadow-md">
          お問い合わせ CONTACT
        </div>
        <Contact />
      </section>

      {/* フッターセクション */}
      <footer className="w-4/5 m-5 p-5 flex justify-between items-center bg-primary rounded-full shadow-xl">
        <div className="font-semibold text-lg text-gray-50">keigo-uのポートフォリオ</div>
        <div>
          <div>all rights reserved. @2023</div>
          <div className='text-right text-sm'>Icons by <a href='https://icons8.jp/' className='underline'>Icons8</a></div>
        </div>
      </footer>

      <Toaster position='top-right'/>
    </main>
  );
}
