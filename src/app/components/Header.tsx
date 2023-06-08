// Header.tsx
"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <ImageContainer>
        <Image
          src="/Images/header/profile.jpg"
          width={1080}
          height={500}
          alt="Picture of the author"
        />
      </ImageContainer>
      <h1>Satou Mitsugu</h1>
      <h2>webデザイナー見習い</h2>
      <p>next.jsの基礎練習01</p>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  text-align: center;
`;

const ImageContainer = styled.div`
  > img {
    border-radius: 50%;
  }
`;
