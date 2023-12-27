import React from "react";
import { ModulePreviewContainer } from "../../styles/commonStyles";
import {
  Text,
  TextPreviewContainer,
} from "../../styles/previewComponentStyles/TextPreviewStyle";

const TextPreview = ({ elements }) => {
  return (
    <TextPreviewContainer>
      {/* {elements.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph.value}</p>
      ))} */}
      <Text>{elements.paragraph.value}</Text>
    </TextPreviewContainer>
  );
};

export default TextPreview;
