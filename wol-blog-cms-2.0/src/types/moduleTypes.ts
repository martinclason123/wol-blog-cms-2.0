// moduleTypes.ts
import { Text, Image, Boolean } from "./elementTypes";

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
    fullWidth: Boolean;
  };
  imageAttributes: {
    mobileWidth: string;
    mobileHeight: string;
    desktopWidth: string;
    desktopHeight: string;
  };
  booleanMessage: string;
}

export type Module =
  | HeaderBannerModule
  | QuoteModule
  | TextModule
  | ImageWithQuoteModule;
