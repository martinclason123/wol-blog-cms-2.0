// EditorPane.tsx
"use client";
import React, { useContext } from "react";
import { ImageSelector } from "@/components/subcomponents";
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
      const isParagraph = selectedElementKey.startsWith("paragraph-");
      if (isParagraph) {
        const paragraphIndex = parseInt(selectedElementKey.split("-")[1]);
        const updatedParagraphs = [...selectedModule.elements.paragraphs.value];
        updatedParagraphs[paragraphIndex] = newValue;
        updateModuleElement(selectedModuleId, "paragraphs", updatedParagraphs);
      } else {
        updateModuleElement(selectedModuleId, selectedElementKey, newValue);
      }
    }
  };

  const selectedModule = modules.find(
    (module) => module.id === selectedModuleId
  );

  if (!selectedElementKey || !selectedModule) {
    return <EditorPaneWrapper>No element selected</EditorPaneWrapper>;
  }

  const elementKey = selectedElementKey.startsWith("paragraph-")
    ? "paragraphs"
    : selectedElementKey.split("-")[0];
  const selectedElement = selectedModule?.elements[elementKey];

  return (
    <EditorPaneWrapper>
      {selectedElement && (
        <EditorElementWrapper>
          <EditorElementLabel>{selectedElement.title}</EditorElementLabel>
          {selectedElement.type === "image" ? (
            <ImageSelector
              selectedImage={selectedElement.value}
              onSelectImage={(image) => handleInputChange(image)}
            />
          ) : (
            <EditorElementInput
              type="text"
              value={
                selectedElementKey.startsWith("paragraph-")
                  ? selectedModule.elements.paragraphs.value[
                      parseInt(selectedElementKey.split("-")[1])
                    ]
                  : selectedElement.value
              }
              onChange={(e) => handleInputChange(e.target.value)}
            />
          )}
        </EditorElementWrapper>
      )}
    </EditorPaneWrapper>
  );
};

export default EditorPane;
