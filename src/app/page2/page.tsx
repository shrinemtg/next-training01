"use client";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const [width, height] = [400, 400];
  return (
    <>
      <Title>
        <h1>My Portfolio</h1>
        <Button>
          <Link href="/">to Home</Link>
        </Button>
      </Title>
      <PortfolioContainer>
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
      </PortfolioContainer>
    </>
  );
}

const Title = styled.h1`
  text-align: center;
  text-shadow: 4px 4px 1px rgba(0, 0, 0, 0.3);
  a {
    font-size: 18px;
    text-shadow: none;
  }
`;

const Button = styled.div`
  > a {
    color: #000;
    text-decoration: none;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: -4px;
      bottom: -2px;
      width: 88px;
      height: 1px;
      background-color: #128080;
      transition: background-color 3s ease-in-out;

      /* &:hover {
        &:after {
          height: 100%;
          background-color: #801212;
        }
        font-size: 1.2em;
      } */
    }
  }
`;

const PortfolioContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 50px 100px 0;
  gap: 30px;

  @media screen and (max-width: 748px) {
    // font-size: 14px;
    margin: 0;
  }
`;

const VideoContainer = styled.video`
  width: 400px;
  height: 400px;
`;
