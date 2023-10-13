'use client';
import { FadeInBottom } from '@/components/FadeInBottom';
import {
  IconDeviceDesktop,
  IconServer,
  IconDeviceMobile,
  IconDatabase,
  IconTool,
  IconId,
} from '@tabler/icons-react';

const Skill = () => {
  const createLevelStars = (num: number): string => {
    var stars = '☆☆☆☆☆';
    const _ = [...Array(num)].forEach(() => (stars = stars.replace('☆', '★')));
    return stars;
  };

  return (
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
  );
};

export default Skill;
