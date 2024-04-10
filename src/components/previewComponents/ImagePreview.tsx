import React from "react";
import {
  Image,
  ModulePreviewContainer,
  PreviewMobilePicture,
  PreviewDesktopPicture,
  PreviewBoxContainer,
} from "../../styles/commonStyles";

const ImagePreview = ({ elements, viewMode }) => {
  const mobileImage = elements.mobileImage.value;
  const desktopImage = elements.desktopImage.value;
  const altText = elements.altText.value;
  const imageWidth = elements.imageWidth.value;
  // Placeholder image URLs
  const mobilePlaceholder = "/images/m-6.jpg";
  const desktopPlaceholder = "/images/d-6.jpg";

  return (
    <ModulePreviewContainer viewMode={viewMode}>
      <PreviewBoxContainer imageWidth={imageWidth}>
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
      </PreviewBoxContainer>
    </ModulePreviewContainer>
  );
};

export default ImagePreview;
