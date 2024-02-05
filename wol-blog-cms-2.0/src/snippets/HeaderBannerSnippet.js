const HeaderBannerSnippet = (elements, imagesPath) => {
  //   image variables
  const altText = elements.altText?.value || "";
  const desktopHeight = elements.desktopAttributes?.value?.height || "";
  const mobileHeight = elements.mobileAttributes?.value?.height || "";
  const desktopWidth = elements.desktopAttributes?.value?.width || "";
  const mobileWidth = elements.mobileAttributes?.value?.width || "";
  const desktopImage = elements.desktopImage?.value?.split(".")[0];
  const mobileImage = elements.mobileImage?.value?.split(".")[0];

  // text variables
  const title = elements.title.value || "";
  const subtitle = elements.subtitle.value || "";

  return `
      <section class="hero full-width">
        <picture>
          <source
            srcset="${mobileImage}.avif"
            type="image/avif"
            media="(max-width: 640px)"
            width="${mobileWidth}"
            height="${mobileHeight}"
          />
          <source
            srcset="${mobileImage}.webp"
            type="image/webp"
            media="(max-width: 640px)"
            width="${mobileWidth}"
            height="${mobileHeight}"
          />
          <source
            srcset="${mobileImage}.jpg"
            type="image/jpeg"
            media="(max-width: 640px)"
            width="${mobileWidth}"
            height="${mobileHeight}"
          />
          <source
            srcset="${desktopImage}.avif"
            type="image/avif"
            media="(min-width: 641px)"
            width="${desktopWidth}"
            height="${desktopHeight}"
          />
          <source
            srcset="${desktopImage}.webp"
            type="image/webp"
            media="(min-width: 641px)"
            width="${desktopWidth}"
            height="${desktopHeight}"
          />
          <img
            src="${imagesPath}${desktopImage}.jpg"
            alt="${altText}"
            width="${desktopWidth}"
            height="${desktopHeight}"
          />
        </picture>
        <h2>
          THE PATHS
          <br />
          WE FORGE
        </h2>
      </section>
      <section class="heading anim-on-scroll prescroll">
        <p class="name">${title}</p>
        <p class="title">
            ${subtitle}
        </p>
      </section>
`;
};

export default HeaderBannerSnippet;
