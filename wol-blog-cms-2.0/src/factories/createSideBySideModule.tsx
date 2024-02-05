import React from "react";
import { SideBySideModule } from "../types/moduleTypes";
import { SideBySidePreview } from "@/components/previewComponents";
import { TextIcon, ImageIcon, BannerIcon, Accessibility } from "@/svgs";
import { SideBySideSnippet } from "../snippets";

export const createSideBySideModule = (id: number): SideBySideModule => ({
  id,
  title: "Side By Side",
  icon: <BannerIcon />,
  snippet: SideBySideSnippet,
  preview: SideBySidePreview,
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
  },
  imageAttributes: {
    mobileWidth: "",
    mobileHeight: "",
    desktopWidth: "",
    desktopHeight: "",
  },
});

export default createSideBySideModule;
