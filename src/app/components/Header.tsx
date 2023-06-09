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
      {/* <p>next.jsの基礎練習01</p> */}
      <Button>
        <Link href="/page2">to Potfolio</Link>
      </Button>
    </HeaderContainer>
  );
}

const Button = styled.div`
  > a {
    color: #000;
    text-decoration: none;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: -6px;
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

const HeaderContainer = styled.div`
  text-align: center;
  /* background-color: #000000;
  color: 2b2b2b; */
  margin: auto;
  padding: 0;
  text-decoration: none;
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
