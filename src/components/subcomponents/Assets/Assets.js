"use client";

import { ImageIcon, CodeIcon } from "@/svgs";
import styled from "styled-components";
import React, { useState, useContext, useEffect } from "react";

import { Container } from "@/styles/commonStyles";

import { Code, Uploads } from "../../subcomponents";
import FilePath from "./FilePath";

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

const AssetVariables = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 4em 0;
`;

const VariableWrapper = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
`;

const VariableLabel = styled.label`
  font-size: 1.5em;
`;

const VariableInput = styled.input`
  padding: 0.5em;
  font-size: 1.5em;
`;

const Assets = () => {
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
  const [assets, setAssets] = useState("images");

  const toggleAssets = (type) => {
    setAssets(type);
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
      <FilePath />
      <ContentComponent />
    </AssetsContainer>
  );
};

export default Assets;
