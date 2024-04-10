// moduleTypes.ts
import { Text, Image, Boolean, Selector } from "./elementTypes";

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
    altText: Text;
  };
  imageAttributes: {
    mobileWidth: string;
    mobileHeight: string;
    desktopWidth: string;
    desktopHeight: string;
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

export interface ImageWithQuoteModule {
  id: number;
  title: string;
  icon: React.ReactNode;
  snippet: (elements: { [key: string]: Text }) => string;
  preview: React.ComponentType<{ elements: { [key: string]: Text } }>;
  elements: {
    mobileImage: Image;
    desktopImage: Image;
    altText: Text;
    text: Text;
    quote: Boolean;
    desktopReversed: Boolean;
    mobileReversed: Boolean;
  };
  imageAttributes: {
    mobileWidth: string;
    mobileHeight: string;
    desktopWidth: string;
    desktopHeight: string;
  };
  booleanMessage: string;
}

export interface YouTubeVideoModule {
  id: number;
  title: string;
  icon: React.ReactNode;
  snippet: (elements: { [key: string]: Text }) => string;
  preview: React.ComponentType<{ elements: { [key: string]: Text } }>;
  elements: {
    mobileImage: Image;
    desktopImage: Image;
    altText: Text;
    link: Text;
  };
  imageAttributes: {
    mobileWidth: string;
    mobileHeight: string;
    desktopWidth: string;
    desktopHeight: string;
  };
}

export interface ImageWithTextModule {
  id: number;
  title: string;
  icon: React.ReactNode;
  snippet: (elements: { paragraphs: Text[] }) => string;
  preview: React.ComponentType<{ elements: { [key: string]: Text } }>;
  elements: {
    mobileImage: Image;
    desktopImage: Image;
    altText: Text;
    paragraphs: Text;
    desktopReversed: Boolean;
    mobileReversed: Boolean;
  };
  imageAttributes: {
    mobileWidth: string;
    mobileHeight: string;
    desktopWidth: string;
    desktopHeight: string;
  };
  booleanMessage: string;
}

export interface ImageModule {
  id: number;
  title: string;
  icon: React.ReactNode;
  snippet: (elements: { [key: string]: Text }) => string;
  preview: React.ComponentType<{ elements: { [key: string]: Text } }>;
  elements: {
    mobileImage: Image;
    desktopImage: Image;
    altText: Text;
    imageWidth: Selector;
    options: string[];
  };
  imageAttributes: {
    mobileWidth: string;
    mobileHeight: string;
    desktopWidth: string;
    desktopHeight: string;
  };
}

export interface ProductsModule {
  id: number;
  title: string;
  icon: React.ReactNode;
  snippet: (elements: { [key: string]: Text }) => string;
  preview: React.ComponentType<{ elements: { [key: string]: Text } }>;
  elements: {
    product1Image: Image;
    product2Image: Image;
    product3Image: Image;
    product4Image: Image;
    product1Alt: Text;
    product2Alt: Text;
    product3Alt: Text;
    product4Alt: Text;
    product1Link: Text;
    product2Link: Text;
    product3Link: Text;
    product4Link: Text;
  };
  imageAttributes: {
    mobileWidth: string;
    mobileHeight: string;
    desktopWidth: string;
    desktopHeight: string;
  };
}

export type Module =
  | HeaderBannerModule
  | QuoteModule
  | TextModule
  | ImageWithQuoteModule
  | YouTubeVideoModule
  | ImageWithTextModule
  | ProductsModule;
