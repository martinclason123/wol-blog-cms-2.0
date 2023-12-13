// In src/components/CMSLayout.tsx
import React from "react";
import { PreviewPane, EditorPane, SelectorPane } from "./panes";

const CMSLayout = () => {
  return (
    <div className="cms-layout">
      <SelectorPane />
      <PreviewPane />
      <EditorPane />
    </div>
  );
};

export default CMSLayout;
