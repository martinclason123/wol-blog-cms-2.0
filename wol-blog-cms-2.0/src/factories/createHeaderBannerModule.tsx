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
      title: "Subtitle=",
      type: "text",
      value: "20 Feet of Joy Beneath an 8-Foot Ceiling",
      icon: <TextIcon />,
    },
    mobileImage: {
      title: "Mobile Image",
      type: "image",
      value: "m-1",
      icon: <ImageIcon />,
    },
    desktopImage: {
      title: "Desktop Image",
      type: "image",
      value: "d-1",
      icon: <ImageIcon />,
    },
  },
});

export default createHeaderBannerModule;
