import React from "react";
import styled from "styled-components";
import {
  Image,
  ModulePreviewContainer,
  PreviewMobilePicture,
  PreviewDesktopPicture,
  PreviewBoxContainer,
} from "../../styles/commonStyles";

const OverlayText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3.6em;
  font-weight: 800;
  text-align: center;
  color: #fff;
  white-space: nowrap;
  text-transform: uppercase;

  @container (min-width: 1100px) {
    font-size: 10.6em;
  }
`;

const ExploreMorePreview = ({ viewMode }) => {
  const imageWidth = "Full-width";

  return (
    <ModulePreviewContainer viewMode={viewMode}>
      <PreviewBoxContainer imageWidth={imageWidth}>
        <PreviewMobilePicture>
          <Image
            src={`/images/explore-blog-m.jpg`}
            alt={"Three blue collar workers"}
          />
        </PreviewMobilePicture>
        <PreviewDesktopPicture>
          <Image
            src={`/images/explore-blog-d.jpg`}
            alt={"Three blue collar workers"}
          />
        </PreviewDesktopPicture>
        <OverlayText>Explore More stories</OverlayText>
      </PreviewBoxContainer>
    </ModulePreviewContainer>
  );
};

export default ExploreMorePreview;
