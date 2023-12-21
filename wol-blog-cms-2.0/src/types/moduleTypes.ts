// moduleTypes.ts
import { Text, Image } from "./elementTypes";

export interface HeaderBannerModule {
  id: number;
  title: string;
  icon: React.ReactNode;
  preview: React.ComponentType<{ elements: { [key: string]: Text } }>;
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
  preview: React.ComponentType<{ elements: { [key: string]: Text } }>;
  elements: {
    quote: Text;
  };
}

export type Module = HeaderBannerModule | QuoteModule;
