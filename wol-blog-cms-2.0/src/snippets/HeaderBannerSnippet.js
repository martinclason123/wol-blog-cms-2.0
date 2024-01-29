const HeaderBannerSnippet = (elements) => {
  console.log("elements: ", elements);
  //   for (key in elements) {
  //     console.log(`key: ${key}, value: ${elements[key]}`);
  //   }
  const desktopImage = elements.desktopImage.value.split(".")[0]; //example myimg.jpg
  const mobileImage = elements.mobileImage.value.split(".")[0]; //example myimg.jpg

  console.log("desktopImage: ", desktopImage);
  return `
  <section class="anim-on-scroll prescroll">
  <picture>
      <source srcset="${mobileImage}.avif
    " type="image/avif" media="(max-width: 640px)" width="1288" height="760">
      <source srcset="${mobileImage}.webp
    " type="image/webp" media="(max-width: 640px)" width="1288" height="760">
      <source srcset="${mobileImage}.jpg
    " type="image/jpeg" media="(max-width: 640px)" width="1288" height="760">
      <source srcset="${desktopImage}.avif
    " type="image/avif" media="(min-width: 641px)" width="3840" height="1868">
      <source srcset="${desktopImage}.webp
    " type="image/webp" media="(min-width: 641px)" width="3840" height="1868">
      <img src="${desktopImage}.jpg" width="3840" height="1868" alt="two men in a field holding a tree">
  </picture>
</section>
    `;
};

export default HeaderBannerSnippet;
