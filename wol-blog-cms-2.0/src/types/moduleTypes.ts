// moduleTypes.ts
import { Text, Image } from "./elementTypes";

export interface HeaderBannerModule {
  id: number;
  title: string;
  icon: React.ReactNode;
  preview: React.ComponentType<{ elements: { [key: string]: Text } }>;
  snippet: (elements: { [key: string]: Text }) => string;
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
  snippet: (elements: { [key: string]: Text }) => string;
  preview: React.ComponentType<{ elements: { [key: string]: Text } }>;
  elements: {
    quote: Text;
  };
}

export interface TextModule {
  id: number;
  title: string;
  icon: React.ReactNode;
  snippet: (elements: { paragraphs: Text[] }) => string;
  preview: React.ComponentType<{ elements: { paragraphs: Text[] } }>;
  elements: {
    paragraphs: Text;
  };
}

export type Module = HeaderBannerModule | QuoteModule | TextModule;
