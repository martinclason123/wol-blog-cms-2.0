"use client";
import React, { useContext } from "react";
import { ModulesContext } from "@/context/ModulesContext";

const EditorPane = () => {
  const { modules, updateModuleElement, selectedModuleId, selectedElementKey } =
    useContext(ModulesContext);

  const handleInputChange = (newValue: string) => {
    if (selectedModuleId != null && selectedElementKey) {
      updateModuleElement(selectedModuleId, selectedElementKey, newValue);
    }
  };

  const selectedModule = modules.find(
    (module) => module.id === selectedModuleId
  );
  const selectedElement = selectedModule?.elements[selectedElementKey];

  return (
    <div className="editor-pane">
      <h2>Editor Pane</h2>
      {selectedElement && (
        <div>
          <label>{selectedElement.title}</label>
          <input
            type="text"
            value={selectedElement.value}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default EditorPane;
