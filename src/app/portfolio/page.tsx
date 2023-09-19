"use client";
import styled from "styled-components";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Portfolio() {
  const [width, height] = [400, 400];
  return (
    <>
      <Title>
        <h1>My Portfolio</h1>
        <Button>
          <Link href="/">● to Home ●</Link>
        </Button>
      </Title>
      <SiteList>
        <h2>◆デモサイト</h2>
        <ul>
          <li>
            <a href="https://dotinstall-demo.vercel.app/">
              dotinstallで学んだことの復習用デモサイト
            </a>
          </li>
          <li>
            <a href="https://bicycle-blog-demo.vercel.app/">
              HTLM/CSSを使った復習用デモサイト
            </a>
          </li>
          <li>
            <a href="https://next-train-blog-main.vercel.app/">
              next.jsでのページ遷移、styled-componentsの練習サイト→デザインカンプをFigmaで作成
            </a>
          </li>
          <li>
            <a href="https://memory-game-train.vercel.app/">
              next.jsでTypescriptの練習「神経衰弱」作成
            </a>
          </li>
        </ul>
      </SiteList>

      <PortfolioContainer>
        <ImageContainer>
          <VideoContainer controls>
            <source
              src="/Images/portfolio/2020-5-5-Aoyama.mp4"
              type="video/mp4"
            />
          </VideoContainer>
          <Image
            src="/Images/portfolio/giraffe2.jpg"
            alt=""
            width={width}
            height={height}
          />
          <Image
            src="/Images/portfolio/曲面モックアップ.jpg"
            alt=""
            width={width}
            height={height}
          />
          <Image
            src="/Images/portfolio/毛焼処＿提案ロゴ.jpg"
            alt=""
            width={width}
            height={height}
          />
          <Image
            src="/Images/portfolio/giraffe-sticker.png"
            alt=""
            width={width}
            height={height}
          />
          <Image
            src="/Images/portfolio/VTPaetnersロゴデザイン.jpg"
            alt=""
            width={width}
            height={height}
          />
          <Image
            src="/Images/portfolio/ct.jpg"
            alt=""
            width={width}
            height={height}
          />
          <Image
            src="/Images/portfolio/ct2.jpg"
            alt=""
            width={width}
            height={height}
          />
          <Image
            src="/Images/portfolio/コアラ皮ふ科クリニックロゴ.jpg"
            alt=""
            width={width}
            height={height}
          />
          <Image
            src="/Images/portfolio/アンケート調査-.jpg"
            alt=""
            width={width}
            height={height}
          />
          <Image
            src="/Images/portfolio/ボタニカルショップエースロゴ.jpg"
            alt=""
            width={width}
            height={height}
          />
          <Image
            src="/Images/portfolio/well-be-earth-rogo.png"
            alt=""
            width={width}
            height={height}
          />
          <Image
            src="/Images/portfolio/ラベルあさお.png"
            alt=""
            width={width}
            height={height}
          />
          <Image
            src="/Images/portfolio/ラベルこんこん.png"
            alt=""
            width={width}
            height={height}
          />
          <Image
            src="/Images/portfolio/日本酒モックアップ.jpg"
            alt=""
            width={width}
            height={height}
          />
        </ImageContainer>
      </PortfolioContainer>
      <FooterContainer>
        <small>(c)bunchans.com</small>
      </FooterContainer>
    </>
  );
}

//サイトリストのスタイリング
const SiteList = styled.div`
  h2 {
    margin-top: 30px;
  }
`;

const FooterContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #83d4d485;
  height: 80px;
  width: 100%;
  margin: 120px auto 0;
`;

const Title = styled.h1`
  text-align: center;
  text-shadow: 4px 4px 1px rgba(0, 0, 0, 0.3);
  a {
    font-size: 24px;
    text-shadow: none;
  }
`;

const Button = styled.div`
  > a {
    position: relative;
    display: inline-block;
    padding: 0.5em 0.5em;
    text-decoration: none;
    background: #00bcd4;
    color: #00bcd4;
    box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.2);
    border-bottom: solid 4px #118e9e;
    border-radius: 4px;
    font-weight: bold;
    letter-spacing: 3px;
    text-shadow: -1px -1px rgba(255, 255, 255, 0.44),
      1px 1px rgba(0, 0, 0, 0.38);
    cursor: pointer; /* クリック可能なボタンにするためにカーソルを追加 */

    &:hover {
      /* 押したときのスタイル */
      border-bottom: solid 2px #00bcd4;
      box-shadow: none;
      text-shadow: -2px -2px -2px rgba(255, 255, 255, 0.3),
        1px 1px rgba(0, 0, 0, 0.3);
    }
  }
`;

const ImageContainer = styled.div`
  > img {
    border-radius: 1%;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.8);
  }
`;

const PortfolioContainer = styled.div`
  object-fit: cover;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 120px auto;
  padding: 0 0 0 100px;
  gap: 32px;

  @media screen and (max-width: 748px) {
    margin: 0;
  }
`;

const VideoContainer = styled.video`
  width: 400px;
  height: 400px;
  border-radius: 1%;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.8);
  background-color: #ffffffbb;
`;
