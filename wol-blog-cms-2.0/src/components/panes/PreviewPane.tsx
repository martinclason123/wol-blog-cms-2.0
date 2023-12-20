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
        {modules.map((module, index) => (
          <div
            key={index}
            style={{ padding: "10px", borderBottom: "1px solid grey" }}
          >
            <h3>{module.title}</h3>
            {Object.entries(module.elements).map(([key, element]) => (
              <p key={key}>
                {element.title}: {element.value}
              </p>
            ))}
          </div>
        ))}
      </PreviewModulesWrapper>
    </PreviewPaneContainer>
  );
};

export default PreviewPane;
