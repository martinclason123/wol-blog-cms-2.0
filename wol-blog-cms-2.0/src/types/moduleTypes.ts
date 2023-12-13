import { Text } from "./elementTypes";

export interface HeaderBannerModule {
  id: number;
  title: string;
  elements: {
    overlayText: Text;
    title: Text;
    subtitle: Text;
    mobileImage: Text;
    desktopImage: Text;
  };
}

export interface QuoteModule {
  id: number;
  title: string;
  elements: {
    quote: Text;
  };
}

export type Module = HeaderBannerModule | QuoteModule;
