// In src/components/CMSLayout.tsx
"use client";
import styled from "styled-components";
import React from "react";
import { PreviewPane, EditorPane, SelectorPane } from "./panes";
import HeaderComponent from "./HeaderComponent";

export const CMSLayoutContainer = styled.div`
  display: flex;
`;

const CMSLayout = () => {
  return (
    <div>
      <HeaderComponent />
      <CMSLayoutContainer>
        <SelectorPane />
        <PreviewPane />
        <EditorPane />
      </CMSLayoutContainer>
    </div>
  );
};

export default CMSLayout;
