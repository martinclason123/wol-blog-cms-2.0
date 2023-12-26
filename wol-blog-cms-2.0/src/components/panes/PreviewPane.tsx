"use client";
import React, { useContext } from "react";
import { ModulesContext } from "@/context/ModulesContext";
import {
  PreviewPaneContainer,
  PreviewModulesWrapper,
} from "@/styles/PreviewPaneStyles";
const PreviewPane = () => {
  const { modules, viewMode } = useContext(ModulesContext);

  return (
    <PreviewPaneContainer>
      <PreviewModulesWrapper viewMode={viewMode}>
        {modules.map((module, index) => {
          const PreviewComponent = module.preview;
          return (
            <div key={index}>
              <PreviewComponent
                elements={module.elements}
                viewMode={viewMode}
              />
            </div>
          );
        })}
      </PreviewModulesWrapper>
    </PreviewPaneContainer>
  );
};

export default PreviewPane;
