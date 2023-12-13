"use client";
import React, { createContext, useState, ReactNode } from "react";
import { HeaderBannerModule, QuoteModule, Module } from "../types/moduleTypes";

// Define the type for the context state
type ModulesContextState = {
  modules: Module[];
};

// Define the type for the provider props
interface ModulesProviderProps {
  children: ReactNode;
}

// Creating the context with an initial empty state
const ModulesContext = createContext<ModulesContextState>({ modules: [] });

// Define the provider component
const ModulesProvider: React.FC<ModulesProviderProps> = ({ children }) => {
  // Define the initial Header Banner module
  const initialHeaderBanner: HeaderBannerModule = {
    id: 1,
    elements: {
      overlayText: { title: "overlay text", type: "text", value: "Banner" },
      title: { title: "title", type: "text", value: "Blog" },
      subtitle: { title: "subtitle", type: "text", value: "blog sub" },
      mobileImage: { title: "mobileImage", type: "image", value: "" },
      desktopImage: { title: "desktopImage", type: "image", value: "" },
    },
  };

  // Define the initial Quote module
  const initialQuoteModule: QuoteModule = {
    id: 2,
    elements: {
      quote: { title: "quote", type: "text", value: "Inspiring quote" },
    },
  };

  const initialQuoteModule2: QuoteModule = {
    id: 3,
    elements: {
      quote: { title: "quote", type: "text", value: "Inspiring quote" },
    },
  };

  // Initial state with the Header Banner and Quote modules
  const [modules, setModules] = useState<Module[]>([
    initialHeaderBanner,
    initialQuoteModule,
    initialQuoteModule2,
  ]);

  // Function to update a specific element in a module
  const updateModuleElement = (
    moduleId: number,
    elementKey: keyof Module["elements"],
    newValue: string
  ) => {
    setModules((currentModules) => {
      return currentModules.map((module) => {
        if (module.id === moduleId) {
          return {
            ...module,
            elements: {
              ...module.elements,
              [elementKey]: {
                ...module.elements[elementKey],
                value: newValue,
              },
            },
          };
        }
        return module;
      });
    });
  };

  // Context value
  const value = {
    modules,
    updateModuleElement, // Add the update function to the context value
  };

  return (
    <ModulesContext.Provider value={value}>{children}</ModulesContext.Provider>
  );
};

export { ModulesContext, ModulesProvider };
