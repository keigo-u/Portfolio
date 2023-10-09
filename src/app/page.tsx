'use client'
import Image from 'next/image'
import iconImage from '../../public/icon.jpg'
import jisui6Image from '../../public/jisui6.png'
import soramojiImage from '../../public/soramoji.jpg'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/css'
import MyLife from '@/components/LifeChart'
import LifeChart from '@/components/LifeChart'

export default function Home() {
  return (
    <main className='min-h-screen bg-gray-50 flex flex-col items-center'>
      {/* ヘッダーセクション */}
      <header className='w-4/5 m-5 p-5 flex justify-between bg-primary text-lg text-gray-50 rounded-full shadow-xl'>
        <div className='font-semibold'>keigo-uのポートフォリオ</div>
        <ul className='flex'>
          <li className='pr-4'>MyLife</li>
          <li className='pr-4'>SKILL</li>
          <li className='pr-4'>WORKS</li>
          <li className='pr-4'>CONTACT</li>
        </ul>
      </header>

      {/* TOPセクション */}
      <section className='w-4/5 m-5 grid grid-rows-2 grid-cols-3 gap-5'>
        {/* Iconカード */}
        <div className='p-4 row-span-2 bg-primary rounded-3xl flex flex-col items-center shodow-2xl'>
          <div className='text-secondary text-base w-full mb-20'>Icon</div>
          <Image src={iconImage} height={120} width={120} alt='アイコン画像' className='rounded-full m-5' />
          <div className='text-white text-xl m-5'>
            こんにちは。<div className='font-bold inline'>keigo-u</div>は<br/>
            Webアプリ、iOSアプリを<br/>
            開発しているエンジニアです。<br/>
          </div>
        </div>
        {/* Profileカード */}
        <div className='p-4 col-span-2 bg-primary rounded-3xl flex flex-col items-center shadow-2xl'>
          <div className='text-secondary text-base w-full'>Profile</div>
          <div className='text-white text-xl m-8'>
          現在沖縄に住んでいる大学4年生。小学生の頃からプログラミングに興味があり、
          高専にて情報学を学びました。その後大学に編入し、プログラミングスクールの
          メンターとしてアルバイトをこなしながら個人開発を行っています。
          趣味は自炊と洋服とスマブラです！最近はアルバイトで稼いだお金のほとんどを
          服で使い切ってしまうのが悩みです。
          </div>
        </div>
        {/* Worksカード */}
        <div className='p-4 bg-primary rounded-3xl flex flex-col items-center shadow-2xl'>
          <div className='text-secondary text-base w-full'>Works</div>
          <Splide
            aria-label="制作物の写真"
            options={{
              autoplay: true, // 自動再生を有効
              interval: 3000, // 自動再生の間隔を3秒に設定
            }}
          >
            <SplideSlide>
              <Image src={jisui6Image} alt='Jisui6画像' className='object-cover w-full h-full rounded-md' />
            </SplideSlide>
            <SplideSlide>
              <Image src={soramojiImage} alt='Jisui6画像' className='object-cover w-full h-full rounded-md' />
            </SplideSlide>
          </Splide>
        </div>
        {/* Linksカード */}
        <div className='p-4 bg-primary rounded-3xl flex flex-col items-center shadow-2xl'>
          <div className='text-secondary text-base w-full'>Links</div>
          <div className='flex m-7'>
            <a href='https://twitter.com/keigoQ4AXfu7z' className='flex flex-col items-center mx-3'>
              <Image src='/icons8-twitterx-96.png' width={96} height={96} alt='twitterIcon' />
              <div className='text-white'>@keigoQ4AXfu7z</div>
            </a>
            <a href='https://twitter.com/keigoQ4AXfu7z' className='flex flex-col items-center mx-3'>
              <Image src='/icons8-インスタグラム-96.png' width={96} height={96} alt='instagramIcon' />
              <div className='text-white'>@kgo_fashion</div>
            </a>
          </div>
        </div>
      </section>

      {/* 生い立ちセクション */}
      <section className='w-4/5 m-5'>
        <div className='text-3xl drop-shadow-md'>生い立ち MyLife</div>
        <LifeChart />
      </section>
    </main>
  )
}
