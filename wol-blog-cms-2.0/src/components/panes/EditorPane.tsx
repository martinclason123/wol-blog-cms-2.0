"use client";
import React, { useContext } from "react";
import { ModulesContext } from "@/context/ModulesContext";

const EditorPane = () => {
  const { modules, updateModuleElement } = useContext(ModulesContext);

  return (
    <div>
      <h2>Editor Pane</h2>
      {/* Editing functionality of the selected module goes here */}
    </div>
  );
};

export default EditorPane;
