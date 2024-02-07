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

const SideBySidePreview = ({ elements, viewMode }) => {
  const mobileImage = elements.mobileImage.value;
  const desktopImage = elements.desktopImage.value;
  const altText = elements.altText.value;
  const text = elements.text.value;

  // Placeholder image URLs
  const mobilePlaceholder = "/images/m-2.jpg";
  const desktopPlaceholder = "/images/d-2.jpg";

  console.log("side by side els:", elements);
  return (
    <ModulePreviewContainer viewMode={viewMode}>
      <PreviewBoxContainerWide mobileReverse={true} desktopReverse={true}>
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
