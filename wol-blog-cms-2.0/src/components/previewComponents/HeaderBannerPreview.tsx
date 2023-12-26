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

import {
  Title,
  Heading,
  BlogName,
  BlogTitle,
  Hero,
} from "../../styles/previewComponentStyles/HeaderBannerPreviewStyles";

const HeaderBannerPreview = ({ elements, viewMode }) => {
  const { overlayText, mobileImage, desktopImage, title, subtitle } = elements;

  return (
    <ModulePreviewContainer viewMode={viewMode}>
      <Hero>
        <PreviewMobilePicture>
          <Source
            srcSet={`/images/${mobileImage.value}.avif`}
            type="image/avif"
          />
          <Source
            srcSet={`/images/${mobileImage.value}.webp`}
            type="image/webp"
          />
          <Source
            srcSet={`/images/${mobileImage.value}.jpg`}
            type="image/jpeg"
          />
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
      </Hero>
      <Heading>
        <BlogName>{title.value}</BlogName>
        <BlogTitle>{subtitle.value}</BlogTitle>
      </Heading>
    </ModulePreviewContainer>
  );
};

export default HeaderBannerPreview;
