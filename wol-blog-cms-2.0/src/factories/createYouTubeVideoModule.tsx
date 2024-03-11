//createYouTubeVideoModule.tsx
import React from "react";
import { YouTubeVideoModule } from "../types/moduleTypes";
import { YouTubeVideoPreview } from "@/components/previewComponents";
import { ImageIcon, Accessibility, YouTubeIcon, LinkIcon } from "@/svgs";
import { YouTubeVideoSnippet } from "../snippets";

export const createYouTubeVideoModule = (id: number): YouTubeVideoModule => ({
  id,
  title: "YouTube Video",
  icon: <YouTubeIcon />,
  snippet: YouTubeVideoSnippet,
  preview: YouTubeVideoPreview,
  elements: {
    link: {
      title: "Link",
      type: "text",
      value: "",
      icon: <LinkIcon />,
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

export default createYouTubeVideoModule;
