// Main.tsx
import React from "react";
import Image from "next/image";

const Main = () => {
  return (
    <>
      <Image
        src="/Images/main/main.png"
        width={1080}
        height={500}
        alt="Picture of the author"
      />
      <div>
        <h2>フルスタックエンジニアを目指して日々精進しています。</h2>
        <p>webデザイン・ロゴデザイン・コーディングできます。</p>

        <h2>人に寄り添い共に叶える</h2>
        <p>
          十人十色のこの道を
          {"\n"}
          少しだけ鮮やかに
          {"\n"}
          少しだけ便利に
          {"\n"}
          一色では終わらせない
          {"\n"}
          そんなデザインを共に作っていくことを心がけています。
        </p>
      </div>

      <d>
        <h1>開発環境</h1>
        <Image
          src="/Images/main/develop.jpg"
          width={1080}
          height={500}
          alt="Picture of the author"
        />
      </d>
      <div class="brave">
        <h2>デザインツール</h2>
        <ul>
          <li>adobe cc</li>
        </ul>
        <h2>プログラミングツール</h2>
        <ul>
          <li>VScode</li>
          <li> Figma</li>
          <li> Git Hub</li>
        </ul>
        <h2>情報共有ツール</h2>
        <ul>
          <li>Slack</li>
          <li> zoom </li>
          <li>Discode</li>
          <li>Notion</li>
        </ul>
      </div>

      <div>
        <Image
          src="/Images/main/skill.jpg"
          width={1080}
          height={500}
          alt="Picture of the author"
        />
        <h1>SKILL</h1>
      </div>
      <div>
        <h2>adobeソフト</h2>
        <ul>
          <li>Illustrator</li>
          <li>Photoshop</li>
          <li>XD</li>
          <li>Premiere Pro</li>
        </ul>
        <h2>プログラミング</h2>
        <ul>
          <li>HTML・CSS</li>
          <li>Java script</li>
          <li>React</li>
          <li>Next.js</li>
        </ul>
      </div>
    </>
  );
};

export default Main;
