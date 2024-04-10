//createImageModule.tsx
import React from "react";
import { ImageModule } from "../types/moduleTypes";
import { ImagePreview } from "@/components/previewComponents";
import { ImageIcon, Accessibility, ExpandIcon } from "@/svgs";
import { ImageSnippet } from "../snippets";

export const createImageModule = (id: number): ImageModule => ({
  id,
  title: "Image",
  icon: <ImageIcon width={"2.5em"} />,
  snippet: ImageSnippet,
  preview: ImagePreview,
  elements: {
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
    imageWidth: {
      title: "Image Width",
      type: "selector",
      value: "",
      icon: <ExpandIcon />,
      options: ["Standard", "Wide", "Full Width"],
    },
  },
  imageAttributes: {
    mobileWidth: "",
    mobileHeight: "",
    desktopWidth: "",
    desktopHeight: "",
  },
});

export default createImageModule;
