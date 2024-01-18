const quoteSnippet = (elements) => {
  console.log("elements quote: ", elements);
  if (elements && elements.quote && elements.quote.value) {
    console.log("elements.quote.value: ", elements.quote.value);
    return `
        <section class="anim-on-scroll margie-bot-lg anim-on-scroll">
          <p>${elements.quote.value}</p>
        </section>
      `;
  }
  return ""; // Return an empty string if elements.quote or elements.quote.value does not exist
};

export default quoteSnippet;
