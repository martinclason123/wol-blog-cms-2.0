// moduleTypes.ts
import { Text, Image } from "./elementTypes";

export interface HeaderBannerModule {
  id: number;
  title: string;
  icon: React.ReactNode;
  elements: {
    overlayText: Text;
    title: Text;
    subtitle: Text;
    mobileImage: Image;
    desktopImage: Image;
  };
}

export interface QuoteModule {
  id: number;
  title: string;
  icon: React.ReactNode;
  elements: {
    quote: Text;
  };
}

export type Module = HeaderBannerModule | QuoteModule;
