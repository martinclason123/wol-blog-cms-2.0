"use client";
import React, { useContext } from "react";
import { ModulesContext } from "@/context/ModulesContext";

const PreviewPane = () => {
  const { modules } = useContext(ModulesContext);

  return (
    <div className="preview-pane">
      <h2>Preview Pane</h2>
      {/* Render the preview of the blog based on the modules */}
    </div>
  );
};

export default PreviewPane;
