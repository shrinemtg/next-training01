"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <small>(c)bunchans.com</small>
    </FooterContainer>
  );
}

// const FooterContainer = styled.div`
//   text-align: center;
//   /* background-color: #000000;
// `;

const FooterContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #83d4d485;
  height: 80px;
  margin: 120px auto 0;
`;
