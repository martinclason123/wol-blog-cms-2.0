import React from "react";
import {
  Picture,
  Source,
  Image,
  ModulePreviewContainer,
  PreviewMobilePicture,
  PreviewDesktopPicture,
  PreviewBoxContainer,
  PreviewBoxContainerWide,
  PreviewHalfBlock,
} from "../../styles/commonStyles";

const SideBySidePreview = ({ elements, viewMode }) => {
  const { mobileImage, desktopImage } = elements;

  // Placeholder image URLs
  const mobilePlaceholder = "/images/m-1.jpg";
  const desktopPlaceholder = "/images/d-1.jpg";

  console.log("side by side els:", elements);
  return (
    <ModulePreviewContainer viewMode={viewMode}>
      <PreviewBoxContainerWide className="box-container reverse margie-bot-sm wide anim-on-scroll">
        <PreviewHalfBlock className="half-block">
          <PreviewMobilePicture>
            {mobileImage.value !== "" ? (
              <>
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
                <Image
                  src={`/gallery/${desktopImage.value}`}
                  alt="Desktop banner image"
                />
              </>
            ) : (
              <Image src={desktopPlaceholder} alt="Placeholder image" />
            )}
          </PreviewDesktopPicture>
        </PreviewHalfBlock>
        <PreviewHalfBlock className="half-block">
          <p className="quote">
            “We look for fullness,” he
            <br className="sm-only" />
            says. “with branches at
            <br className="sm-only" />
            the top that splay out side
            <br className="sm-only" />
            to side just so. She’s a<br className="sm-only" />
            beautiful tree. I just need
            <br className="sm-only" />a bigger living room.”
          </p>
        </PreviewHalfBlock>
      </PreviewBoxContainerWide>
    </ModulePreviewContainer>
  );
};

export default SideBySidePreview;
