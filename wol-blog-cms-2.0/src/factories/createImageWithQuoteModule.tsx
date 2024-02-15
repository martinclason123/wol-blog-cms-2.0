//createImageWithQuoteModule.tsx
import React from "react";
import { ImageWithQuoteModule } from "../types/moduleTypes";
import { ImageWithQuotePreview } from "@/components/previewComponents";
import {
  TextIcon,
  ImageIcon,
  BannerIcon,
  Accessibility,
  ReverseIcon,
  ImageWithQuoteIcon,
} from "@/svgs";
import { ImageWithQuoteSnippet } from "../snippets";

export const createImageWithQuoteModule = (
  id: number
): ImageWithQuoteModule => ({
  id,
  title: "Image With Quote",
  icon: <ImageWithQuoteIcon />,
  snippet: ImageWithQuoteSnippet,
  preview: ImageWithQuotePreview,
  elements: {
    text: {
      title: "Text",
      type: "text",
      value:
        "“We look for fullness,” he says. “with branches at the top that splay out side to side just so. She’s a beautiful tree. I just need a bigger living room.”",
      icon: <TextIcon />,
    },
    mobileImage: {
      title: "Mobile Image",
      type: "image",
      value: "",
      icon: <ImageIcon />,
    },
    desktopImage: {
      title: "Desktop Image",
      type: "image",
      value: "",
      icon: <ImageIcon />,
    },
    altText: {
      title: "Alt Text",
      type: "text",
      value: "",
      icon: <Accessibility />,
    },
    desktopReversed: {
      title: "Desktop Layout",
      type: "boolean",
      value: false,
      icon: <ReverseIcon />,
    },
    mobileReversed: {
      title: "Mobile Layout",
      type: "boolean",
      value: false,
      icon: <ReverseIcon />,
    },
  },
  imageAttributes: {
    mobileWidth: "",
    mobileHeight: "",
    desktopWidth: "",
    desktopHeight: "",
  },
  booleanMessage: "Reverse layout",
});

export default createImageWithQuoteModule;
