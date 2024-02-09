export const handleParagraphInputChange = ({
  paragraphIndex,
  newValue,
  selectedModuleId,
  updateModuleElement,
  modules,
  updateImageAttributes,
}) => {
  // Find the selected module based on the selectedModuleId
  const selectedModule = modules.find(
    (module) => module.id === selectedModuleId
  );

  // Ensure the selected module and paragraph index are valid
  if (!selectedModule || paragraphIndex < 0) return;

  // Copy the current paragraphs and update the specified paragraph with the new value
  const updatedParagraphs = [...selectedModule.elements.paragraphs.value];
  updatedParagraphs[paragraphIndex] = newValue;

  // Use the provided updateModuleElement function to update the module's paragraphs
  updateModuleElement(selectedModuleId, "paragraphs", updatedParagraphs);
};

export const updateModuleElementValue = ({
  moduleId,
  elementKey,
  newValue,
  updateModuleElement,
}) => {
  // Directly use the provided updateModuleElement function to update the element's value
  updateModuleElement(moduleId, elementKey, newValue);
};

export const updateImageAttributes = async ({
  selectedModuleId,
  selectedElementKey,
  newValue,
  fetchImageAttributes,
  updateModuleElement,
}) => {
  // Check if the element is an image
  if (
    selectedElementKey === "mobileImage" ||
    selectedElementKey === "desktopImage"
  ) {
    try {
      // Fetch image attributes
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
        console.error("Error fetching image attributes");
      }
    } catch (error) {
      console.error("Error fetching image attributes:", error);
    }
  }
};
