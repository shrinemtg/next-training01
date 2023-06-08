// Header.tsx
import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Image
        src="/Images/header/profile.jpg"
        width={1080}
        height={500}
        alt="Picture of the author"
      />
      <h1>Satou Mitsugu</h1>
      <h2>webデザイナー見習い</h2>
      <p>next.jsの基礎練習01</p>
    </>
  );
};

export default Header;
