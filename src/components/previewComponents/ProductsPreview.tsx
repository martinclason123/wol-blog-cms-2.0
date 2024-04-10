// ProductsPreview.tsx
import React from "react";
import { ModulePreviewContainer } from "../../styles/commonStyles";
import {
  Image,
  PreviewMobilePicture,
  PreviewDesktopPicture,
  PreviewBoxContainerWide,
  PreviewHalfBlock,
  Quote,
  ProductsBox,
  Product,
  ProductImage,
  ProductCTA,
} from "../../styles/commonStyles";

const ProductsPreview = ({ elements }) => {
  const product1Placeholder = "/images/product-1.jpg";
  const product2Placeholder = "/images/product-2.jpg";
  const product3Placeholder = "/images/product-3.jpg";
  const product4Placeholder = "/images/product-4.jpg";

  console.log("ProductsPreview elements", elements);
  // Render the preview for HeaderBanner module
  return (
    <ModulePreviewContainer>
      <ProductsBox>
        <Product>
          {elements.product1Image.value !== "" ? (
            <ProductImage
              src={`/gallery/${elements.product1Image.value}`}
              alt={elements.product1Title.value}
            />
          ) : (
            <ProductImage src={product1Placeholder} alt="Placeholder image" />
          )}

          <ProductCTA>{"SHOP NOW >"}</ProductCTA>
        </Product>
        <Product>
          {elements.product2Image.value !== "" ? (
            <ProductImage
              src={`/gallery/${elements.product2Image.value}`}
              alt={elements.product2Title.value}
            />
          ) : (
            <ProductImage src={product2Placeholder} alt="Placeholder image" />
          )}

          <ProductCTA>{"SHOP NOW >"}</ProductCTA>
        </Product>
        <Product>
          {elements.product3Image.value !== "" ? (
            <ProductImage
              src={`/gallery/${elements.product3Image.value}`}
              alt={elements.product3Title.value}
            />
          ) : (
            <ProductImage src={product3Placeholder} alt="Placeholder image" />
          )}

          <ProductCTA>{"SHOP NOW >"}</ProductCTA>
        </Product>
        <Product>
          {elements.product4Image.value !== "" ? (
            <ProductImage
              src={`/gallery/${elements.product4Image.value}`}
              alt={elements.product4Title.value}
            />
          ) : (
            <ProductImage src={product4Placeholder} alt="Placeholder image" />
          )}

          <ProductCTA>{"SHOP NOW >"}</ProductCTA>
        </Product>
      </ProductsBox>
    </ModulePreviewContainer>
  );
};

export default ProductsPreview;
