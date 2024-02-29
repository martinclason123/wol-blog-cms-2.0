const ImageSnippet = (elements, imagesPath) => {
  console.log("ImageSnippet", elements);
  const altText = elements.altText?.value || "";
  const desktopHeight = elements.desktopAttributes?.value?.height || "";
  const mobileHeight = elements.mobileAttributes?.value?.height || "";
  const desktopWidth = elements.desktopAttributes?.value?.width || "";
  const mobileWidth = elements.mobileAttributes?.value?.width || "";
  const desktopImage = elements.desktopImage?.value?.split(".")[0];
  const mobileImage = elements.mobileImage?.value?.split(".")[0];
  const imageWidth = elements.imageWidth?.value || "";
  let modifierClasses = "";
  switch (imageWidth) {
    case "Wide":
      modifierClasses = "section--wide ";
      break;
    case "Very wide":
      modifierClasses = "section--very-wide";
      break;
    case "Full-width":
      modifierClasses = "section--full-width";
      break;
    default:
      modifierClasses = "";
  }

  return `

  <!-- Image -->

  <section class="${modifierClasses} anim-on-scroll">
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
  </section>
  `;
};

export default ImageSnippet;
