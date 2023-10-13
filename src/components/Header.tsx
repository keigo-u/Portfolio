'use client';
import { IconMenu2, IconSquareRoundedX } from '@tabler/icons-react';
import Link from 'next/link';
import { Link as Scroll } from 'react-scroll';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleIsMenuOpen = () => {
    setIsMenuOpen((prev) => {
      if (!prev) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = 'scroll';
      }
      return !prev;
    });
  };

  const overlayStyle = isMenuOpen
    ? 'fixed top-0 left-0 z-20 bg-primary min-h-screen min-w-full flex flex-col transition-all ease-linear'
    : 'fixed top-0 left-0 z-20 bg-primary min-h-screen min-w-full flex flex-col -translate-y-full transition-all ease-linear';

  return (
    <>
      <header className="w-11/12 md:w-4/5 m-5 p-5 flex justify-between bg-primary md:text-lg text-gray-50 rounded-full shadow-xl fixed top-0 z-10">
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

        <button className="md:hidden" onClick={toggleIsMenuOpen}>
          <IconMenu2 />
        </button>
      </header>

      <div className={overlayStyle}>
        <button
          onClick={toggleIsMenuOpen}
          className="absolute top-0 right-0 m-8 z-20"
        >
          <IconSquareRoundedX
            width={50}
            height={50}
            strokeWidth={1}
            className="text-white font-thin"
          />
        </button>

        <ul className="flex flex-col mb-20 absolute bottom-0 text-2xl text-white font-bold text-right w-full">
          <li className="p-4 text-xl hover:underline">
            <Scroll to="top" offset={-110} smooth onClick={toggleIsMenuOpen}>
              トップ TOP
            </Scroll>
          </li>
          <li className="p-4 text-xl hover:underline">
            <Scroll to="mylife" offset={-110} smooth onClick={toggleIsMenuOpen}>
              生い立ち MyLife
            </Scroll>
          </li>
          <li className="p-4 text-xl hover:underline">
            <Scroll to="skill" offset={-110} smooth onClick={toggleIsMenuOpen}>
              スキルセット SKILL
            </Scroll>
          </li>
          <li className="p-4 text-xl hover:underline">
            <Scroll to="works" offset={-110} smooth onClick={toggleIsMenuOpen}>
              成果物 WORKS
            </Scroll>
          </li>
          <li className="p-4 text-xl hover:underline">
            <Scroll
              to="contact"
              offset={-110}
              smooth
              onClick={toggleIsMenuOpen}
            >
              お問い合わせ CONTACT
            </Scroll>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
