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
        <Link href="/">to Home</Link>
      </Title>
      <PortfolioContainer>
        {/* <VideoContainer controls>
          <source
            src="/Images/portfolio/2023-05-05-青山-結婚式.mp4"
            type="video/mp4"
          />
        </VideoContainer> */}
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
