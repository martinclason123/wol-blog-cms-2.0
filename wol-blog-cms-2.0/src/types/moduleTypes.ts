// moduleTypes.ts
import { Text } from "./elementTypes";

export interface HeaderBannerModule {
  id: number;
  title: string;
  icon: React.ReactNode;
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
  icon: React.ReactNode;
  elements: {
    quote: Text;
  };
}

export type Module = HeaderBannerModule | QuoteModule;
