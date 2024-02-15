// "use client";
import styled from "styled-components";
import Editor from "@monaco-editor/react";
import React, { useContext, useState, useEffect } from "react";
import beautify from "js-beautify";
import { ModulesContext } from "@/context/ModulesContext";

export const PreviewModulesWrapper = styled.div`
  margin: 0 auto;
  width: ${(props) => (props.viewMode === "desktop" ? "1100px" : "640px")};
`;

const Code = () => {
  const { modules, imagesPath } = useContext(ModulesContext);
  const [formattedCode, setFormattedCode] = useState("");
  console.log("imagesPath: ", imagesPath);

  useEffect(() => {
    let combinedCode = `
      <link
        rel="stylesheet"
        href="content/seasonal-content/blog/styles/blog-post-2024-BEM.css?$staticlink$"
      />
      <script
        type="text/javascript"
        src="content/seasonal-content/blog/scripts/blog-post.js?$staticlink$"
      ></script>
      
      <div class="ag-full-width">
        <article id="blog-post" class="ag-site-width fed-asset-reset">
    `;
    modules.forEach((module) => {
      if (module.snippet && module.elements) {
        combinedCode += module.snippet(module.elements, imagesPath);
      }
    });
    combinedCode += `

      <!-- Read More -->
      
      <section class="explore-more anim-on-scroll prescroll">
        <a href="$url('Search-Show','cgid','Blog')$">
          <picture>
            <source
              srcset="
                content/seasonal-content/blog/images/explore-blog-m.avif?$staticlink$
              "
              type="image/avif"
              media="(max-width: 640px)"
              width="620"
              height="252"
            />
            <source
              srcset="
                content/seasonal-content/blog/images/explore-blog-m.webp?$staticlink$
              "
              type="image/webp"
              media="(max-width: 640px)"
              width="620"
              height="252"
            />
            <source
              srcset="
                content/seasonal-content/blog/images/explore-blog-m.jpg?$staticlink$
              "
              type="image/jpeg"
              media="(max-width: 640px)"
              width="620"
              height="252"
            />
            <source
              srcset="
                content/seasonal-content/blog/images/explore-blog-d.avif?$staticlink$
              "
              type="image/avif"
              media="(min-width: 641px)"
              width="1705"
              height="693"
            />
            <source
              srcset="
                content/seasonal-content/blog/images/explore-blog-d.webp?$staticlink$
              "
              type="image/webp"
              media="(min-width: 641px)"
              width="1705"
              height="693"
            />
            <img
              src="content/seasonal-content/blog/images/explore-blog-d.jpg?$staticlink$"
              width="1705"
              height="693"
              loading="lazy"
              alt="three bluer collar workers at their job sites"
            />
          </picture>

          <h2 class="explore-more__header">EXPLORE MORE STORIES</h2>
        </a>
      </section>
    </article>
  </div>
    `;

    // Format the combined code using js-beautify
    const formatted = beautify.html(combinedCode);

    setFormattedCode(formatted);
  }, [modules]);

  return (
    <Editor height="90vh" defaultLanguage="html" defaultValue={formattedCode} />
  );
};

export default Code;
