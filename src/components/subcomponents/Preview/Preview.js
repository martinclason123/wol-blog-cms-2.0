"use client";
import styled from "styled-components";
import React, { useContext } from "react";

import { ModulesContext } from "@/context/ModulesContext";
import { ExploreMorePreview } from "@/components/previewComponents";

export const PreviewModulesWrapper = styled.div`
  margin: 0 auto;
  width: ${(props) => (props.viewMode === "desktop" ? "1100px" : "640px")};
`;

const Preview = () => {
  const { modules, viewMode } = useContext(ModulesContext);
  return (
    <>
      {modules.map((module, index) => {
        const PreviewComponent = module.preview;
        return (
          <div key={index}>
            <PreviewComponent elements={module.elements} viewMode={viewMode} />
          </div>
        );
      })}
      <ExploreMorePreview viewMode={viewMode} />
    </>
  );
};

export default Preview;
