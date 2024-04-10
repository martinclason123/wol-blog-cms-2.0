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

      <!-- Header Banner -->

      <section class="hero section--full-width">
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
        <h2 class="hero__overlay-text">
          THE PATHS
          <br />
          WE FORGE
        </h2>
      </section>
      <section class="hero__heading anim-on-scroll prescroll">
        <p class="hero__name">${title}</p>
        <p class="hero__title">
            ${subtitle}
        </p>
      </section>

`;
};

export default HeaderBannerSnippet;
