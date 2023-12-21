// HeaderBannerPreview.tsx
import React from "react";
import { Picture, Source, Image } from "../../styles/commonStyles";

const HeaderBannerPreview = ({ elements }) => {
  const { overlayText, mobileImage, desktopImage } = elements;
  // Render the preview for HeaderBanner module
  return (
    <section>
      <Picture>
        {/* Mobile image sources */}
        <Source
          srcSet={`/images/${mobileImage.value}.avif`}
          type="image/avif"
          media="(max-width: 640px)"
        />
        <Source
          srcSet={`/images/${mobileImage.value}.webp`}
          type="image/webp"
          media="(max-width: 640px)"
        />
        <Source
          srcSet={`/images/${mobileImage.value}.jpg`}
          type="image/jpeg"
          media="(max-width: 640px)"
        />

        {/* Desktop image sources */}
        <Source
          srcSet={`/images/${desktopImage.value}.avif`}
          type="image/avif"
          media="(min-width: 641px)"
        />
        <Source
          srcSet={`/images/${desktopImage.value}.webp`}
          type="image/webp"
          media="(min-width: 641px)"
        />

        {/* Fallback image */}
        <Image src={`/images/${desktopImage.value}.jpg`} alt="Banner image" />
      </Picture>
    </section>
  );
};

export default HeaderBannerPreview;
