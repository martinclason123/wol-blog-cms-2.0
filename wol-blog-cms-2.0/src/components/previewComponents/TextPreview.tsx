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
      {/* <Text>{elements.paragraph.value}</Text> */}
      {elements.paragraphs.value.map((paragraph, index) => {
        return <Text key={index}>{paragraph}</Text>;
      })}
    </TextPreviewContainer>
  );
};

export default TextPreview;
