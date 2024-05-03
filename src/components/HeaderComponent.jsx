// HeaderComponent.tsx
"use client";
import React, { useContext } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  HeaderComponentContainer,
  HeaderComponentButtons,
  ToolBarRight,
} from "../styles/HeaderComponentStyles";
import { DesktopIcon, MobileIcon, DownloadIcon, PreviewIcon } from "@/svgs";
import { ModulesContext } from "@/context/ModulesContext";

const HeaderComponent = () => {
  const { user, error, isLoading } = useUser();

  const { viewMode, toggleViewMode, previewContent, setPreviewContent } =
    useContext(ModulesContext);

  const handleViewModeChange = (mode) => {
    if (viewMode !== mode) {
      toggleViewMode();
    }
  };

  const handleContentChange = (content) => {
    setPreviewContent(content);
  };

  return (
    <HeaderComponentContainer>
      <HeaderComponentButtons>
        <DesktopIcon
          onClick={() => handleViewModeChange("desktop")}
          isActive={viewMode === "desktop"}
        />
        <MobileIcon
          onClick={() => handleViewModeChange("mobile")}
          isActive={viewMode === "mobile"}
        />
      </HeaderComponentButtons>
      <ToolBarRight>
        <HeaderComponentButtons>
          <PreviewIcon
            width={"3.5em"}
            isActive={previewContent === "preview"}
            onClick={() => {
              handleContentChange("preview");
            }}
          />
          <DownloadIcon
            width={"3.5em"}
            isActive={previewContent === "assets"}
            onClick={() => {
              handleContentChange("assets");
            }}
          />
        </HeaderComponentButtons>
      </ToolBarRight>
    </HeaderComponentContainer>
  );
};

export default HeaderComponent;
