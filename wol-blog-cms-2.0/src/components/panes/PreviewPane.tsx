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
        <h2>Preview Pane</h2>
        {modules.map((module, index) => {
          const PreviewComponent = module.preview;
          return (
            <div
              key={index}
              style={{ padding: "10px", borderBottom: "1px solid grey" }}
            >
              <PreviewComponent elements={module.elements} />
            </div>
          );
        })}
      </PreviewModulesWrapper>
    </PreviewPaneContainer>
  );
};

export default PreviewPane;
