import React from "react";
import {
  Image,
  ModulePreviewContainer,
  PreviewMobilePicture,
  PreviewDesktopPicture,
  PreviewBoxContainerWide,
} from "../../styles/commonStyles";

const ImagePreview = ({ elements, viewMode }) => {
  const mobileImage = elements.mobileImage.value;
  const desktopImage = elements.desktopImage.value;
  const altText = elements.altText.value;
  const fullWidth = elements.fullWidth.value;
  // Placeholder image URLs
  const mobilePlaceholder = "/images/m-6.jpg";
  const desktopPlaceholder = "/images/d-6.jpg";

  return (
    <ModulePreviewContainer viewMode={viewMode}>
      <PreviewBoxContainerWide fullWidth>
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
      </PreviewBoxContainerWide>
    </ModulePreviewContainer>
  );
};

export default ImagePreview;
