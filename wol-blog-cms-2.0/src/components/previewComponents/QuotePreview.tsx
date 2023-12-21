// QuotePreview.tsx
import React from "react";

const QuotePreview = ({ elements }) => {
  // Render the preview for HeaderBanner module
  return (
    <div>
      <h1>{elements.quote.title}</h1>
      <p>{elements.quote.value}</p>
      {/* Render other elements as needed */}
    </div>
  );
};

export default QuotePreview;
