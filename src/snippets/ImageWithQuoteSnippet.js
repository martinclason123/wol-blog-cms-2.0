const ImageWithQuoteSnippet = (elements, imagesPath) => {
  console.log("ImageWithQuoteSnippet", elements, imagesPath);
  //   image variables
  const altText = elements.altText?.value || "";
  const desktopHeight = elements.desktopAttributes?.value?.height || "";
  const mobileHeight = elements.mobileAttributes?.value?.height || "";
  const desktopWidth = elements.desktopAttributes?.value?.width || "";
  const mobileWidth = elements.mobileAttributes?.value?.width || "";
  const desktopImage = elements.desktopImage?.value?.split(".")[0];
  const mobileImage = elements.mobileImage?.value?.split(".")[0];

  //layout variables
  let mobileReversed = elements.mobileReversed?.value || false;
  let desktopReversed = elements.desktopReversed?.value || false;
  let modifierClasses = "";

  // convert to boolean
  mobileReversed = mobileReversed === "true";
  desktopReversed = desktopReversed === "true";

  if (mobileReversed) {
    modifierClasses += " box-container--mobile-reverse";
  }
  if (desktopReversed) {
    modifierClasses += " box-container--desktop-reverse";
  }

  // text variables
  const quote = elements.text.value || "";
  return `
  <!-- Image with quote -->

  <section class="box-container wide anim-on-scroll ${modifierClasses}">
    <div class="half-block">
      <picture>
        <source
          srcset="${imagesPath}${mobileImage}.avif?$staticlink$"
          type="image/avif"
          media="(max-width: 640px)"
          width="${mobileWidth}"
          height="${mobileHeight}"
        />
        <source
          srcset="${imagesPath}${mobileImage}.webp?$staticlink$"
          type="image/webp"
          media="(max-width: 640px)"
          width="${mobileWidth}"
          height="${mobileHeight}"
        />
        <source
          srcset="${imagesPath}${mobileImage}.jpg?$staticlink$"
          type="image/jpeg"
          media="(max-width: 640px)"
          width="${mobileWidth}"
          height="${mobileHeight}"
        />
        <source
          srcset="${imagesPath}${desktopImage}.avif?$staticlink$"
          type="image/avif"
          media="(min-width: 641px)"
          width="${desktopWidth}"
          height="${desktopHeight}"
        />
        <source
          srcset="${imagesPath}${desktopImage}.webp?$staticlink$"
          type="image/webp"
          media="(min-width: 641px)"
          width="${desktopWidth}"
          height="${desktopHeight}"
        />
        <img
          src="${imagesPath}${desktopImage}.jpg?$staticlink$"
          alt="${altText}"
          width="${desktopWidth}"
          height="${desktopHeight}"
        />
      </picture>
    </div>
    <div class="half-block">
        <p class="quote__paragraph">
          ${quote}
        </p>
    </div>
</section>

  `;
};

export default ImageWithQuoteSnippet;
