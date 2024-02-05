// createHeaderBannerModule.tsx
import React from "react";
import { HeaderBannerModule } from "../types/moduleTypes";
import { HeaderBannerPreview } from "@/components/previewComponents";
import { TextIcon, ImageIcon, BannerIcon, Accessibility } from "@/svgs";
import { HeaderBannerSnippet } from "../snippets";

export const createHeaderBannerModule = (id: number): HeaderBannerModule => ({
  id,
  title: "Header Banner",
  icon: <BannerIcon />,
  snippet: HeaderBannerSnippet,
  preview: HeaderBannerPreview,
  elements: {
    overlayText: {
      title: "Overlay Text",
      type: "text",
      value: "The paths we forge",
      icon: <TextIcon />,
    },
    title: {
      title: "Title",
      type: "text",
      value: "The koets family",
      icon: <TextIcon />,
    },
    subtitle: {
      title: "Subtitle",
      type: "text",
      value: "20 Feet of Joy Beneath an 8-Foot Ceiling",
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

export default createHeaderBannerModule;
