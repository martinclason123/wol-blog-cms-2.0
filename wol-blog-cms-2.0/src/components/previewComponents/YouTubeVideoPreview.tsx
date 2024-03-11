// const YouTubeVideoPreview = () => {
//   return <>YOUTUBE</>;
// };

// export default YouTubeVideoPreview;

import React from "react";
import {
  Image,
  ModulePreviewContainer,
  PreviewMobilePicture,
  PreviewDesktopPicture,
  PreviewBoxContainer,
} from "../../styles/commonStyles";

const YouTubeVideoPreview = ({ elements, viewMode }) => {
  const mobileImage = elements.mobileImage.value;
  const desktopImage = elements.desktopImage.value;
  const altText = elements.altText.value;
  const imageWidth = "Full-width"; // Default image width
  // Placeholder image URLs
  const mobilePlaceholder = "/images/yt-m.jpg";
  const desktopPlaceholder = "/images/yt-d.jpg";

  return (
    <ModulePreviewContainer viewMode={viewMode}>
      <PreviewBoxContainer imageWidth={imageWidth}>
        <PreviewMobilePicture>
          {mobileImage !== "" ? (
            <>
              <Image
                src={`/gallery/${mobileImage}`}
                alt={altText ? altText : "YouTube video poster"}
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
                alt={altText ? altText : "YouTube video poster"}
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

export default YouTubeVideoPreview;
