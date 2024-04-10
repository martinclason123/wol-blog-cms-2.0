//createImageWithTextModule.tsx
import React from "react";
import { ImageWithTextModule } from "../types/moduleTypes";
import { ImageWithTextPreview } from "@/components/previewComponents";
import {
  TextIcon,
  ImageIcon,
  BannerIcon,
  Accessibility,
  ReverseIcon,
  ImageWithTextIcon,
} from "@/svgs";
import { ImageWithTextSnippet } from "../snippets";

export const createImageWithTextModule = (id: number): ImageWithTextModule => ({
  id,
  title: "Image With Text",
  icon: <ImageWithTextIcon />,
  snippet: ImageWithTextSnippet,
  preview: ImageWithTextPreview,
  elements: {
    paragraphs: {
      title: "paragraph",
      type: "text",
      value: [
        `Extending the life of a pair of boots depends on extending the life of the shop equipment itself. “Some of the machines in the shop date back to the 1920s, the 1950s, the 1970s,” Aaron says. “When we need to get a part, a lot of it is really hard to find, so we tend to do a lot of the repairs ourselves. They all just do their job, and we keep them all going. That can be a job in itself.”`,
        `For a guy who loves working with his hands, it’s kind of a dream. Aaron’s forged his path into a life where he enjoys each and every day, a life where hard work doesn’t feel like work at all because it’s so rewarding.`,
      ],
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

export default createImageWithTextModule;
