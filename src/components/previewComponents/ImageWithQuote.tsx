import React from "react";
import {
  Image,
  ModulePreviewContainer,
  PreviewMobilePicture,
  PreviewDesktopPicture,
  PreviewBoxContainerWide,
  PreviewHalfBlock,
  Quote,
} from "../../styles/commonStyles";

const SideBySidePreview = ({ elements, viewMode }) => {
  const mobileImage = elements.mobileImage.value;
  const desktopImage = elements.desktopImage.value;
  const altText = elements.altText.value;
  const text = elements.text.value;
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
        <PreviewHalfBlock className="half-block">
          <Quote width={"92"}>
            {text
              ? text
              : `We look for fullness,” he says. “with branches at the top that
            splay out side to side just so. She’s a beautiful tree. I just need
            a bigger living room.`}
          </Quote>
        </PreviewHalfBlock>
      </PreviewBoxContainerWide>
    </ModulePreviewContainer>
  );
};

export default SideBySidePreview;
