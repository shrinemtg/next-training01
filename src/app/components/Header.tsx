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
        <Link href="/page2">to Potfolio</Link>
      </Button>
    </HeaderContainer>
  );
}

const Button = styled.div`
  margin-bottom: 32px;
  > a {
    color: #000;
    text-decoration: none;
    font-size: 18px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: -6px;
      bottom: -2px;
      width: 100px;
      height: 2px;
      background-color: #25abcc;
      transition: background-color 3s ease-in-out;
    }
  }
`;

const HeaderContainer = styled.div`
  text-align: center;
  margin: auto;
  padding: 0;
  text-decoration: none;
  h1 {
    text-shadow: 4px 4px 1px rgba(0, 0, 0, 0.3);
  }
`;

const ImageContainer = styled.div`
  > img {
    object-fit: cover;
    border-radius: 1%;
    max-width: 100%;
    margin-top: 30px;
    height: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  }
`;
