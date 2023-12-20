// In src/components/CMSLayout.tsx
import React from "react";
import { PreviewPane, EditorPane, SelectorPane } from "./panes";
import HeaderComponent from "./HeaderComponent";

const CMSLayout = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="cms-layout">
        <SelectorPane />
        <PreviewPane />
        <EditorPane />
      </div>
    </div>
  );
};

export default CMSLayout;
