import React, { useState, useEffect } from "react";

const HeaderBannerSnippet = (elements) => {
  const [desktopHeight, setDesktopHeight] = useState("");
  const [desktopWidth, setDesktopWidth] = useState("");
  const [mobileHeight, setMobileHeight] = useState("");
  const [mobileWidth, setMobileWidth] = useState("");

  useEffect(() => {
    // Function to fetch image attributes
    const fetchImageAttributes = async (imageName) => {
      try {
        const response = await fetch("/api/attributes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ imageName }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return await response.json();
      } catch (error) {
        console.error("Error fetching image attributes:", error);
        return null;
      }
    };

    // Fetch desktop image attributes
    fetchImageAttributes(elements.desktopImage.value).then((data) => {
      if (data) {
        setDesktopHeight(data.height);
        setDesktopWidth(data.width);
      }
    });

    // Fetch mobile image attributes
    fetchImageAttributes(elements.mobileImage.value).then((data) => {
      if (data) {
        setMobileHeight(data.height);
        setMobileWidth(data.width);
      }
    });
  }, [elements.desktopImage.value, elements.mobileImage.value]);

  const desktopImage = elements.desktopImage.value.split(".")[0];
  const mobileImage = elements.mobileImage.value.split(".")[0];

  return `
    <section class="anim-on-scroll prescroll">
      <picture>
          <source srcset="${mobileImage}.avif" type="image/avif" media="(max-width: 640px)" width="${mobileWidth}" height="${mobileHeight}">
          <source srcset="${mobileImage}.webp" type="image/webp" media="(max-width: 640px)" width="${mobileWidth}" height="${mobileHeight}">
          <source srcset="${mobileImage}.jpg" type="image/jpeg" media="(max-width: 640px)" width="${mobileWidth}" height="${mobileHeight}">
          <source srcset="${desktopImage}.avif" type="image/avif" media="(min-width: 641px)" width="${desktopWidth}" height="${desktopHeight}">
          <source srcset="${desktopImage}.webp" type="image/webp" media="(min-width: 641px)" width="${desktopWidth}" height="${desktopHeight}">
          <img src="${desktopImage}.jpg" alt="two men in a field holding a tree" width="${desktopWidth}" height="${desktopHeight}">
      </picture>
    </section>
  `;
};

export default HeaderBannerSnippet;
