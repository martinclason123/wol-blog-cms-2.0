const YouTubeVideoSnippet = (elements, imagesPath) => {
  console.log("YouTubeVideoSnippet", elements);
  const altText = elements.altText?.value || "";
  const desktopHeight = elements.desktopAttributes?.value?.height || "";
  const mobileHeight = elements.mobileAttributes?.value?.height || "";
  const desktopWidth = elements.desktopAttributes?.value?.width || "";
  const mobileWidth = elements.mobileAttributes?.value?.width || "";
  const desktopImage = elements.desktopImage?.value?.split(".")[0];
  const mobileImage = elements.mobileImage?.value?.split(".")[0];
  const link = elements.link?.value || "";

  return `
  
    <!-- YouTube Video -->
  
    <section class="wide section--very-wide anim-on-scroll">
    <a href="https://youtu.be/${link}" data-youtube="${link}">
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
     </a>
    </section>

    <link
    rel="stylesheet"
    type="text/css"
    href="css/youtube-modal.css?$staticlink$"
    />

    <!-- Youtube Modal -->
    
    <script type="text/template" id="youtube-modal-template">
        <div class="ag-youtube-modal">
        <div class="ag-youtube-modal__bg" close-modal></div>
        <button class="ag-youtube-modal__close" close-modal></button>
        <div class="ag-youtube-modal__content-outer">
            <div class="ag-youtube-modal__content">
            <iframe
                class="ag-youtube-modal__iframe"
                frameborder="0"
                autoplay
                allowfullscreen
            ></iframe>
            </div>
        </div>
        </div>
    </script>
    <script type="text/javascript" src="js/youtube-modal.js?$staticlink$"></script>
    `;
};

export default YouTubeVideoSnippet;
