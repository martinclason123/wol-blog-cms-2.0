// createHeaderBannerModule.tsx
import React from "react";
import { HeaderBannerModule } from "../types/moduleTypes";
import { HeaderBannerPreview } from "@/components/previewComponents";
import { TextIcon, ImageIcon, BannerIcon } from "@/svgs";

export const createHeaderBannerModule = (id: number): HeaderBannerModule => ({
  id,
  title: "Header Banner",
  icon: <BannerIcon />,
  preview: HeaderBannerPreview,
  elements: {
    overlayText: {
      title: "Overlay Text",
      type: "text",
      value: "Banner Text",
      icon: <TextIcon />,
    },
    title: {
      title: "Title",
      type: "text",
      value: "Blog Title",
      icon: <TextIcon />,
    },
    subtitle: {
      title: "Subtitle",
      type: "text",
      value: "Blog Subtitle",
      icon: <TextIcon />,
    },
    mobileImage: {
      title: "Mobile Image",
      type: "image",
      value: "mobile.jpg",
      icon: <ImageIcon />,
    },
    desktopImage: {
      title: "Desktop Image",
      type: "image",
      value: "desktop.jpg",
      icon: <ImageIcon />,
    },
  },
});

export default createHeaderBannerModule;
