// HeaderComponent.tsx
"use client";
import React, { useContext } from "react";
import {
  HeaderComponentContainer,
  HeaderComponentButtons,
} from "../styles/HeaderComponentStyles";
import { DesktopIcon, MobileIcon } from "@/svgs";
import { ModulesContext } from "@/context/ModulesContext";

const HeaderComponent = () => {
  const { viewMode, toggleViewMode } = useContext(ModulesContext);

  const handleViewModeChange = (mode) => {
    if (viewMode !== mode) {
      toggleViewMode();
    }
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
    </HeaderComponentContainer>
  );
};

export default HeaderComponent;
