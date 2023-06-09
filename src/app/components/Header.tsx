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
      <h2>webデザイナー見習い</h2>
      <p>next.jsの基礎練習01</p>
      <Button>
        <Link href="/page2">to Potfolio</Link>
      </Button>
    </HeaderContainer>
  );
}

const Button = styled.div`
  color: wheat;
  text-decoration: none;
`;

const HeaderContainer = styled.div`
  text-align: center;
  /* background-color: #000000;
  color: white; */
  margin: 0;
  text-decoration: none;
`;

const ImageContainer = styled.div`
  > img {
    object-fit: cover;
    border-radius: 1%;
    max-width: 100%;
    margin-top: 40;
    height: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }
`;
