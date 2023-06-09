"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function Main() {
  return (
    <>
      <MainContainer>
        <ImageContainer>
          <Image
            src="/Images/main/study.jpg"
            width={1080}
            height={400}
            alt="Picture of the author"
          />
        </ImageContainer>
        <div>
          <h2>フルスタックエンジニアを目指して日々精進！</h2>
          <p>webデザイン・ロゴデザイン・コーディングできます</p>

          <h2>人に寄り添い共に叶える</h2>
          <p>
            十人十色のこの道を
            <br />
            少しだけ便利に
            <br />
            一色では終わらせない
            <br />
            そんなデザインを共に作っていくことを心がけています。
          </p>
        </div>

        <div>
          <ImageContainer>
            <Image
              src="/Images/main/develop.jpg"
              width={1080}
              height={400}
              alt="Picture of the author"
            />
            <h1>開発環境</h1>
          </ImageContainer>
        </div>
        <div>
          <h2>デザインツール</h2>
          <p>adobe cc</p>
          <h2>プログラミングツール</h2>
          <p>
            VScode
            <br />
            Figma
            <br />
            Git Hub
            <br />
          </p>
          <h2>情報共有ツール</h2>

          <p>
            Slack
            <br />
            zoom
            <br />
            Discord
            <br />
            Notion
          </p>
        </div>

        <div>
          <ImageContainer>
            <Image
              src="/Images/main/skill.jpg"
              width={1080}
              height={400}
              alt="Picture of the author"
            />
          </ImageContainer>
          <h1>SKILL</h1>
        </div>

        <div>
          <h2>adobeソフト</h2>
          <p>
            Illustrator
            <br />
            Photoshop
            <br />
            XD
            <br />
            Premiere Pro
          </p>
          <h2>プログラミング</h2>
          <p>
            HTML・CSS
            <br />
            Java script
            <br />
            React
            <br />
            Next.js
            <br />
          </p>
        </div>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  text-align: center;
  /* background-color: #2b2b2b;
  color: white; */

  h1 {
    text-decoration: underline;
    text-decoration-color: #25abcc;
    /* display: inline-block;
    margin-bottom: -1px; */
  }
  p {
    font-size: 18px;
  }

  ul {
    list-style-type: none;
  }
`;

const ImageContainer = styled.div`
  > img {
    border-radius: 1%;
    margin: 10px auto;
    max-width: 100%;
    margin-top: 32px;
    height: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  }
`;
