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

  // Placeholder image URLs
  const mobilePlaceholder = "/images/m-1.jpg";
  const desktopPlaceholder = "/images/d-1.jpg";

  return (
    <ModulePreviewContainer viewMode={viewMode}>
      <Hero>
        <PreviewMobilePicture>
          {mobileImage.value !== "" ? (
            <>
              {/* <Source
                srcSet={`/gallery/${mobileImage.value}.avif`}
                type="image/avif"
              />
              <Source
                srcSet={`/gallery/${mobileImage.value}.webp`}
                type="image/webp"
              /> */}
              <Image
                src={`/gallery/${mobileImage.value}`}
                alt="Mobile banner image"
              />
            </>
          ) : (
            <Image src={mobilePlaceholder} alt="Placeholder image" />
          )}
        </PreviewMobilePicture>
        <PreviewDesktopPicture>
          {desktopImage.value !== "" ? (
            <>
              {/* <Source
                srcSet={`/gallery/${desktopImage.value}.avif`}
                type="image/avif"
              />
              <Source
                srcSet={`/gallery/${desktopImage.value}.webp`}
                type="image/webp"
              /> */}
              <Image
                src={`/gallery/${desktopImage.value}`}
                alt="Desktop banner image"
              />
            </>
          ) : (
            <Image src={desktopPlaceholder} alt="Placeholder image" />
          )}
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
