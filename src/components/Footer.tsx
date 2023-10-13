import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-11/12 md:w-4/5 m-5 px-5 py-1 md:py-5 flex justify-between items-center bg-primary rounded-full shadow-xl">
      <Link
        href="/"
        className="hidden md:block font-semibold text-lg text-gray-50"
      >
        keigo-uのポートフォリオ
      </Link>
      <div className="w-full md:w-auto text-right">
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
  );
};

export default Footer;
