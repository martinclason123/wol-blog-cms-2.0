import { Text } from "./elementTypes";

export interface HeaderBannerModule {
  id: number;
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
  elements: {
    quote: Text;
  };
}

export type Module = HeaderBannerModule | QuoteModule;
