import React from "react";
import {
  Picture,
  Source,
  Image,
  ModulePreviewContainer,
  PreviewMobilePicture,
  PreviewDesktopPicture,
  Text,
  PreviewBoxContainerWide,
  PreviewHalfBlock,
  Quote,
} from "../../styles/commonStyles";

const ImageWithTextPreview = ({ elements, viewMode }) => {
  const mobileImage = elements.mobileImage.value;
  const desktopImage = elements.desktopImage.value;
  const altText = elements.altText.value;
  const paragraphs = elements.paragraphs.value;
  const desktopReversed = elements.desktopReversed.value;
  const mobileReversed = elements.mobileReversed.value;

  // Placeholder image URLs
  const mobilePlaceholder = "/images/m-2.jpg";
  const desktopPlaceholder = "/images/d-2.jpg";

  console.log("desktop reversed:", desktopReversed);
  console.log("mobile reversed:", mobileReversed);
  return (
    <ModulePreviewContainer viewMode={viewMode}>
      <PreviewBoxContainerWide
        mobileReverse={mobileReversed}
        desktopReverse={desktopReversed}
      >
        <PreviewHalfBlock className="half-block">
          <PreviewMobilePicture>
            {mobileImage !== "" ? (
              <>
                <Image
                  src={`/gallery/${mobileImage}`}
                  alt={altText ? altText : "Mobile banner image"}
                />
              </>
            ) : (
              <Image src={mobilePlaceholder} alt="Placeholder image" />
            )}
          </PreviewMobilePicture>
          <PreviewDesktopPicture>
            {desktopImage !== "" ? (
              <>
                <Image
                  src={`/gallery/${desktopImage}`}
                  alt={altText ? altText : "Desktop banner image"}
                />
              </>
            ) : (
              <Image src={desktopPlaceholder} alt="Placeholder image" />
            )}
          </PreviewDesktopPicture>
        </PreviewHalfBlock>
        <PreviewHalfBlock
          className="half-block"
          mobileReverse={mobileReversed}
          desktopReverse={desktopReversed}
        >
          {paragraphs.map((paragraph, index) => {
            return <Text key={index}>{paragraph}</Text>;
          })}
        </PreviewHalfBlock>
      </PreviewBoxContainerWide>
    </ModulePreviewContainer>
  );
};

export default ImageWithTextPreview;
