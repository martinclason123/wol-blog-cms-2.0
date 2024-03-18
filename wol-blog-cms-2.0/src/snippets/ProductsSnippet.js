const ProductsSnippet = (elements, imagesPath) => {
  console.log("ProductsTextSnippet", elements, imagesPath);
  const products = [
    {
      image: elements.product1Image.value.split(".")[0],
      link: elements.product1Link.value,
      alt: elements.product1Title.value,
    },
    {
      image: elements.product2Image.value.split(".")[0],
      link: elements.product2Link.value,
      alt: elements.product2Title.value,
    },
    {
      image: elements.product3Image.value.split(".")[0],
      link: elements.product3Link.value,
      alt: elements.product3Title.value,
    },
    {
      image: elements.product4Image.value.split(".")[0],
      link: elements.product4Link.value,
      alt: elements.product4Title.value,
    },
  ];
  return `

<!-- Product Block -->

<section class="product-container wide anim-on-scroll prescroll">  
  ${products.map((product) => {
    return `
      <a
      class="product"
      href="$url(${product.link})$"
    >
      <picture>
        <source
          srcset="
            ${imagesPath + product.image}.avif?$staticlink$
          "
          type="image/avif"
          width="826"
          height="826"
        />
        <source
          srcset="
          ${imagesPath + product.image}.webp?$staticlink$
          "
          type="image/webp"
          width="826"
          height="826"
        />
        <img
          src="${imagesPath + product.image}.jpg?$staticlink$"
          width="826"
          height="826"
          loading="lazy"
          alt="${product.alt}"
        />
      </picture>

      <p>SHOP NOW ></p>
    </a>
    `;
  })}
</section>  
`;
};

export default ProductsSnippet;
