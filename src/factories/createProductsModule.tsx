// Factory function for TextModule
import React from "react";
import { ProductsModule } from "../types/moduleTypes";
import { ProductsPreview } from "@/components/previewComponents"; // Assuming you'll create a preview component
import {
  ProductsIcon,
  TextIcon,
  LinkIcon,
  ImageIcon,
  Accessibility,
} from "@/svgs";
import { ProductsSnippet } from "../snippets";

const createTextModule = (id: number): ProductsModule => ({
  id,
  title: "Products",
  icon: <ProductsIcon />,
  snippet: ProductsSnippet,
  preview: ProductsPreview,
  elements: {
    product1Image: {
      title: "Product 1 Image",
      type: "image",
      value: "",
      icon: <ImageIcon />,
    },
    product2Image: {
      title: "Product 2 Image",
      type: "image",
      value: "",
      icon: <ImageIcon />,
    },

    product3Image: {
      title: "Product 3 Image",
      type: "image",
      value: "",
      icon: <ImageIcon />,
    },
    product4Image: {
      title: "Product 4 Image",
      type: "image",
      value: "",
      icon: <ImageIcon />,
    },

    product1Title: {
      title: "Product 1 Alt",
      type: "text",
      value: "Brown dress boots",
      icon: <Accessibility />,
    },
    product2Title: {
      title: "Product 2 Alt",
      type: "text",
      value: "Leather work boots",
      icon: <Accessibility />,
    },
    product3Title: {
      title: "Product 3 Alt",
      type: "text",
      value: "Tee shirt",
      icon: <Accessibility />,
    },
    product4Title: {
      title: "Product 4 Alt",
      type: "text",
      value: "Henleyt sweater",
      icon: <Accessibility />,
    },
    product1Link: {
      title: "Product 1 Link",
      type: "text",
      value:
        "'Product-Show','pid','58550M','dwvar_58550M_color','W1210890-003'",
      icon: <LinkIcon />,
    },
    product2Link: {
      title: "Product 2 Link",
      type: "text",
      value:
        "'Product-Show','pid','58550M','dwvar_58550M_color','W1210890-003'",
      icon: <LinkIcon />,
    },
    product3Link: {
      title: "Product 3 Link",
      type: "text",
      value:
        "'Product-Show','pid','58550M','dwvar_58550M_color','W1210890-003'",
      icon: <LinkIcon />,
    },
    product4Link: {
      title: "Product 4 Link",
      type: "text",
      value:
        "'Product-Show','pid','58550M','dwvar_58550M_color','W1210890-003'",
      icon: <LinkIcon />,
    },
  },
  imageAttributes: {
    mobileWidth: "",
    mobileHeight: "",
    desktopWidth: "",
    desktopHeight: "",
  },
});

export default createTextModule;
