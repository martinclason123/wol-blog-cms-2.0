"use client";

import { ImageIcon, CodeIcon } from "@/svgs";
import styled from "styled-components";
import React, { useState } from "react";

import { Container } from "@/styles/commonStyles";

import { Code, Uploads } from "../../subcomponents";

export const AssetsContainer = styled(Container)``;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ToggleMenu = styled.div`
  background-color: #f1f1f1;
  border-radius: 0.5em;
  padding: 0.25em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Assets = () => {
  const [assets, setAssets] = useState("images");

  const toggleAssets = (type) => {
    setAssets(type);
  };

  const ContentComponent = () => {
    switch (assets) {
      case "images":
        return <Uploads />;
      case "code":
        return <Code />;
      default:
        return <Uploads />;
    }
  };

  return (
    <AssetsContainer>
      <MenuContainer>
        <ToggleMenu>
          <ImageIcon
            width={"3.5em"}
            isActive={assets === "images"}
            onClick={() => {
              toggleAssets("images");
            }}
          />
          <CodeIcon
            width={"3.5em"}
            isActive={assets === "code"}
            onClick={() => {
              toggleAssets("code");
            }}
          />
        </ToggleMenu>
      </MenuContainer>
      <ContentComponent />
    </AssetsContainer>
  );
};

export default Assets;
