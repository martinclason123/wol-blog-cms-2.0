const quoteSnippet = (elements) => {
  if (elements && elements.quote && elements.quote.value) {
    return `

        <!-- Quote -->

        <section class="anim-on-scroll quote">
          <p class="quote__paragraph">${elements.quote.value}</p>
        </section>
      `;
  }
  return ""; // Return an empty string if elements.quote or elements.quote.value does not exist
};

export default quoteSnippet;
