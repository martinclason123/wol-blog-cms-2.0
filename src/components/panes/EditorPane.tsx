"use client";
import React, { useContext } from "react";
import { ImageSelector, BooleanToggle } from "@/components/subcomponents";
import { ModulesContext } from "@/context/ModulesContext";
import {
  handleParagraphInputChange,
  updateModuleElementValue,
  updateImageAttributes,
} from "@/utilities/inputHandlers";
import {
  EditorElementWrapper,
  EditorElementLabel,
  EditorElementInput,
  EditorPaneWrapper,
} from "../../styles/editorPaneStyles";

const EditorPane = () => {
  const {
    modules,
    updateModuleElement,
    selectedModuleId,
    selectedElementKey,
    fetchImageAttributes,
  } = useContext(ModulesContext);

  const handleInputChange = async (newValue: string) => {
    console.log("selectedModuleKey : ", selectedElementKey);
    if (selectedModuleId != null && selectedElementKey) {
      const isParagraph = selectedElementKey.startsWith("paragraph-");
      if (isParagraph) {
        const paragraphIndex = parseInt(selectedElementKey.split("-")[1]);
        handleParagraphInputChange({
          paragraphIndex,
          newValue,
          selectedModuleId,
          updateModuleElement,
          modules,
        });
      } else {
        // Use the general update for non-paragraph elements
        updateModuleElementValue({
          moduleId: selectedModuleId,
          elementKey: selectedElementKey,
          newValue,
          updateModuleElement,
        });

        // New: Extracted logic for handling image attributes
        await updateImageAttributes({
          selectedModuleId,
          selectedElementKey,
          newValue,
          fetchImageAttributes,
          updateModuleElement,
        });
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

  // Conditional rendering based on the element type
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
          ) : selectedElement.type === "boolean" ? (
            <BooleanToggle
              isActive={selectedElement.value === "true"}
              onToggle={(value) => handleInputChange(value.toString())}
              message={selectedModule.booleanMessage}
            />
          ) : selectedElement.type === "selector" ? (
            <select
              value={selectedElement.value}
              onChange={(e) => handleInputChange(e.target.value)}
            >
              <option value="Standard">Standard</option>
              <option value="Wide">Wide</option>
              <option value="Very wide">Very wide</option>
              <option value="Full-width">Full-width</option>
            </select>
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
