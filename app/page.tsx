import Link from "next/link";

export default function page() {
  return (
    <>
      <head>
        <title>山田太郎のポートフォリオサイト</title>
      </head>
      <Link href="/page2">page2へ</Link>
      <header>
        <img src="" alt="" />
        <h1>Satou Mitsugu</h1>
        <h2>webデザイナー見習い</h2>
        <p>next.jsの基礎練習01</p>
      </header>
      {/* -------------------------------------------------- */}
      <main>
        <div class="work-1">
          <h1>WORKS</h1>
          <img src="work-1.png" alt="" width="480" height="280" />
        </div>
        <div class="brave">
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
        {/* -------------------------------------------------- */}
        <div class="work-1">
          <h1>開発環境</h1>
          <img src="work-1.png" alt="" width="480" height="280" />
        </div>
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
        {/* -------------------------------------------------- */}
        <div class="work-1">
          <h1>SKILL</h1>
          <img src="work-1.png" alt="" width="480" height="280" />
        </div>
        <div class="brave">
          <h2>adobeソフト</h2>
          <ul>
            <li>Illustrator</li>
            <li>Photoshop</li>
            <li>XD</li>
            <li>Premiere Pro</li>
          </ul>
          <h2>adobeソフト</h2>
          <ul>
            <li>HTML・CSS</li>
            <li>Java script</li>
            <li>React</li>
            <li>Next.js</li>
          </ul>
        </div>
      </main>
    </>
  );
}
