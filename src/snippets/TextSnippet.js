// Text.js
const TextSnippet = (elements) => {
  return `

    <!-- Text -->

      <section class="anim-on-scroll prescroll text">
       ${elements.paragraphs.value
         .map((paragraph) => {
           return `<p class="text__paragraph">${paragraph}</p>`;
         })
         .join("")}
      </section>

  `;
};

export default TextSnippet;
