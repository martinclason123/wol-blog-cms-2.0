// HeaderBannerPreview.tsx
import React from "react";
import {
  Picture,
  Source,
  Image,
  ModulePreviewContainer,
  PreviewMobilePicture,
  PreviewDesktopPicture,
} from "../../styles/commonStyles";

import { Title } from "../../styles/previewComponentStyles/HeaderBannerPreviewStyles";

const HeaderBannerPreview = ({ elements }) => {
  const { overlayText, mobileImage, desktopImage } = elements;

  return (
    <ModulePreviewContainer>
      <PreviewMobilePicture>
        <Source
          srcSet={`/images/${mobileImage.value}.avif`}
          type="image/avif"
        />
        <Source
          srcSet={`/images/${mobileImage.value}.webp`}
          type="image/webp"
        />
        <Source srcSet={`/images/${mobileImage.value}.jpg`} type="image/jpeg" />
        <Image src={`/images/${mobileImage.value}.jpg`} alt="Banner image" />
      </PreviewMobilePicture>
      <PreviewDesktopPicture>
        <Source
          srcSet={`/images/${desktopImage.value}.avif`}
          type="image/avif"
        />
        <Source
          srcSet={`/images/${desktopImage.value}.webp`}
          type="image/webp"
        />
        <Image src={`/images/${desktopImage.value}.jpg`} alt="Banner image" />
      </PreviewDesktopPicture>
      <Title>{overlayText.value}</Title>
    </ModulePreviewContainer>
  );
};

export default HeaderBannerPreview;
