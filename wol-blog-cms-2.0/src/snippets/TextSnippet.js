// Text.js
const TextSnippet = (elements) => {
  return `
      <section class="anim-on-scroll prescroll">
       ${elements.paragraphs.value
         .map((paragraph) => {
           return `<p>${paragraph}</p>`;
         })
         .join("")}
      </section>
  `;
};

export default TextSnippet;
