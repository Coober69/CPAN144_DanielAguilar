"use client"; 

import React from "react";
import styles from "./StyledPage.module.css"; 
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.bgColor || "blue"};
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

export default function StyledPage() {
  return (
    <div className={styles.container}>
      <h1 style={{ backgroundColor: "lightblue", fontSize: "24px", padding: "10px" }}>
        Welcome to Daniel's Styled Page
      </h1>
      <button className={styles.cssButton}>CSS Module Button</button>
      <StyledButton bgColor="green">Styled-Component Button</StyledButton>
    </div>
  );
}