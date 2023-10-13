import { Toaster } from 'react-hot-toast';
import Header from '@/components/Header';
import Top from '@/components/Top';
import LifeChart from '@/components/LifeChart';
import Skill from '@/components/Skill';
import Works from '@/components/Works';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div
      id="content"
      className="min-h-screen min-w-full bg-gray-50 flex flex-col items-center box-border"
    >
      {/* ヘッダーセクション */}
      <Header />

      {/* トップセクション */}
      <Top />

      {/* 生い立ちセクション */}
      <section id="mylife" className="w-11/12 md:w-4/5 m-5">
        <div className="text-2xl md:text-3xl font-bold drop-shadow-md">
          生い立ち MyLife
        </div>
        <LifeChart />
      </section>

      {/* スキルセットセクション */}
      <section id="skill" className="w-11/12 md:w-4/5 m-5 box-border">
        <div className="text-2xl md:text-3xl font-bold drop-shadow-md">
          スキルセット SKILL
        </div>

        <Skill />
      </section>

      {/* 制作物セクション */}
      <section id="works" className="w-11/12 md:w-4/5 m-5">
        <div className="text-2xl md:text-3xl font-bold drop-shadow-md">
          制作物 WORKS
        </div>

        <Works />
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className="w-11/12 md:w-4/5 m-5">
        <div className="text-2xl md:text-3xl font-bold drop-shadow-md">
          お問い合わせ CONTACT
        </div>
        <Contact />
      </section>

      {/* フッターセクション */}
      <Footer />

      <Toaster position="top-right" />
    </div>
  );
}
