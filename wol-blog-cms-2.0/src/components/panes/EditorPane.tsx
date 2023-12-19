"use client";
import React, { useContext } from "react";
import { ModulesContext } from "@/context/ModulesContext";
import {
  EditorElementWrapper,
  EditorElementLabel,
  EditorElementInput,
  EditorPaneWrapper,
} from "../../styles/EditorPaneStyles";

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
    <EditorPaneWrapper>
      {selectedElement && (
        <EditorElementWrapper>
          <EditorElementLabel>{selectedElement.title}</EditorElementLabel>
          <EditorElementInput
            type="text"
            value={selectedElement.value}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </EditorElementWrapper>
      )}
    </EditorPaneWrapper>
  );
};

export default EditorPane;
