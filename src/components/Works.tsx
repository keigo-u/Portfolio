'use client';
import { FadeInBottom } from '@/components/FadeInBottom';
import Image from 'next/image';
import jisui6Image from '../../public/images/jisui6.png';
import soramojiImage from '../../public/images/soramoji.jpg';
import rmImage from '../../public/images/reportmanager_connected.png';
import vfImage from '../../public/images/virtualfitting_icon.png';

const Works = () => {
  return (
    <>
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
    </>
  );
};

export default Works;
