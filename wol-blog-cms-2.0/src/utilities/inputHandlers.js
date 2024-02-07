export const handleParagraphInputChange = ({
  paragraphIndex,
  newValue,
  selectedModuleId,
  updateModuleElement,
  modules,
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
