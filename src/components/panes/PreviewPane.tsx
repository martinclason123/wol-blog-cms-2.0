// PreviewPane.tsx
"use client";
import React, { useContext } from "react";
import { Assets, Preview } from "../subcomponents";
import { ModulesContext } from "@/context/ModulesContext";
import {
  PreviewPaneContainer,
  PreviewModulesWrapper,
} from "@/styles/PreviewPaneStyles";
const PreviewPane = () => {
  const { modules, viewMode, previewContent } = useContext(ModulesContext);

  const ContentComponent = () => {
    switch (previewContent) {
      case "assets":
        return <Assets />;
      // case "uploads":
      //   return <Uploads />;
      // case "code":
      //   return <Code />;
      default:
        return <Preview />;
    }
  };

  return (
    <PreviewPaneContainer>
      <PreviewModulesWrapper
        viewMode={previewContent === "assets" ? "desktop" : viewMode}
      >
        <ContentComponent />
      </PreviewModulesWrapper>
      {/* <Preview /> */}
    </PreviewPaneContainer>
  );
};

export default PreviewPane;
