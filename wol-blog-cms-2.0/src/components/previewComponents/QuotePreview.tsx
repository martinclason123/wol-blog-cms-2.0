// QuotePreview.tsx
import React from "react";
import { ModulePreviewContainer } from "../../styles/commonStyles";
import { Quote } from "../../styles/previewComponentStyles/QuotePreviewStyles";

const QuotePreview = ({ elements }) => {
  // Render the preview for HeaderBanner module
  return (
    <ModulePreviewContainer>
      <Quote>{elements.quote.value}</Quote>
      {/* Render other elements as needed */}
    </ModulePreviewContainer>
  );
};

export default QuotePreview;
