import { HeaderBannerModule } from "../types/moduleTypes";

export const createHeaderBannerModule = (id: number): HeaderBannerModule => ({
  id,
  title: "Header Banner",
  elements: {
    overlayText: { title: "overlay text", type: "text", value: "Banner" },
    title: { title: "title", type: "text", value: "Blog" },
    subtitle: { title: "subtitle", type: "text", value: "blog sub" },
    mobileImage: { title: "mobileImage", type: "image", value: "" },
    desktopImage: { title: "desktopImage", type: "image", value: "" },
  },
});

export default createHeaderBannerModule;
