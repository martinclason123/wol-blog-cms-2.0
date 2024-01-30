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
  const {
    modules,
    updateModuleElement,
    selectedModuleId,
    selectedElementKey,
    fetchImageAttributes,
  } = useContext(ModulesContext);

  const handleInputChange = async (newValue: string) => {
    if (selectedModuleId != null && selectedElementKey) {
      const isParagraph = selectedElementKey.startsWith("paragraph-");
      if (isParagraph) {
        const paragraphIndex = parseInt(selectedElementKey.split("-")[1]);
        const updatedParagraphs = [...selectedModule.elements.paragraphs.value];
        updatedParagraphs[paragraphIndex] = newValue;
        updateModuleElement(selectedModuleId, "paragraphs", updatedParagraphs);
      } else {
        // Update the element value
        updateModuleElement(selectedModuleId, selectedElementKey, newValue);

        // Check if the updated element is an image
        if (
          selectedElementKey === "mobileImage" ||
          selectedElementKey === "desktopImage"
        ) {
          try {
            // Use fetchImageAttributes from context to get image attributes
            const attributes = await fetchImageAttributes(newValue);

            if (attributes) {
              const { width, height } = attributes;

              // Determine the key for updating the module's image attributes
              const imageAttributesKey =
                selectedElementKey === "mobileImage"
                  ? "mobileAttributes"
                  : "desktopAttributes";

              // Update the module's image attributes
              updateModuleElement(selectedModuleId, imageAttributesKey, {
                width,
                height,
              });
            } else {
              // Handle case where attributes could not be fetched
              console.error("Error fetching image attributes");
            }
          } catch (error) {
            console.error("Error fetching image attributes:", error);
            // Handle any errors here
          }
        }
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
