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

const FooterContainer = styled.div`
  text-align: center;
  /* background-color: #000000;
`;
