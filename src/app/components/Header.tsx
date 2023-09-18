"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <HeaderContainer>
      <ImageContainer>
        <Image
          src="/Images/header/profile3.jpg"
          width={1080}
          height={500}
          alt="Picture of the author"
        />
      </ImageContainer>
      <h1>Satou Mitsugu</h1>
      <h2>
        見習い
        <br />
        webデザイナー
      </h2>
      {/* <p>next.jsの基礎練習01</p> */}
      <Button>
        <Link href="/portfolio">● to Potfolio ●</Link>
      </Button>
    </HeaderContainer>
  );
}

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

const HeaderContainer = styled.div`
  text-align: center;
  margin: auto;
  margin-bottom: 64px;
  padding: 0;
  text-decoration: none;
  h1 {
    text-shadow: 4px 4px 1px rgba(0, 0, 0, 0.3);
  }
  h2 {
    font-size: 18px;
    margin-bottom: 32px;
  }
`;

const ImageContainer = styled.div`
  > img {
    object-fit: cover;
    border-radius: 1%;
    max-width: 100%;
    margin-top: 32px;
    height: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  }
`;
