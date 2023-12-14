"use client";
import React, { createContext, useState, ReactNode } from "react";
import { HeaderBannerModule, QuoteModule, Module } from "../types/moduleTypes";

// Define the type for the context state
type ModulesContextState = {
  modules: Module[];
  selectedModuleId: number | null;
  selectedElementKey: string | null;
  setSelectedModuleAndElement: (
    moduleId: number | null,
    elementKey: string | null
  ) => void;
  updateModuleElement: (
    moduleId: number,
    elementKey: keyof Module["elements"],
    newValue: string
  ) => void;
};

// Define the type for the provider props
interface ModulesProviderProps {
  children: ReactNode;
}

// Creating the context with an initial empty state
const ModulesContext = createContext<ModulesContextState>({
  modules: [],
  selectedModuleId: null,
  selectedElementKey: null,
  setSelectedModuleAndElement: () => {},
  updateModuleElement: () => {},
});

// Define the provider component
const ModulesProvider: React.FC<ModulesProviderProps> = ({ children }) => {
  // Define the initial Header Banner module
  const initialHeaderBanner: HeaderBannerModule = {
    id: 1,
    title: "Header Banner",
    elements: {
      overlayText: { title: "overlay text", type: "text", value: "Banner" },
      title: { title: "title", type: "text", value: "Blog" },
      subtitle: { title: "subtitle", type: "text", value: "blog sub" },
      mobileImage: { title: "mobileImage", type: "image", value: "" },
      desktopImage: { title: "desktopImage", type: "image", value: "" },
    },
  };

  // Define the initial Quote modules
  const initialQuoteModules: QuoteModule[] = [
    {
      id: 2,
      title: "Quote",
      elements: {
        quote: { title: "quote", type: "text", value: "Inspiring quote" },
      },
    },
    {
      id: 3,
      title: "Quote",
      elements: {
        quote: {
          title: "quote",
          type: "text",
          value: "Another inspiring quote",
        },
      },
    },
  ];
  const initialHeaderBanner2: HeaderBannerModule = {
    id: 4,
    title: "Header Banner",
    elements: {
      overlayText: { title: "overlay text", type: "text", value: "Banner" },
      title: { title: "title", type: "text", value: "Blog" },
      subtitle: { title: "subtitle", type: "text", value: "blog sub" },
      mobileImage: { title: "mobileImage", type: "image", value: "" },
      desktopImage: { title: "desktopImage", type: "image", value: "" },
    },
  };

  // Initial state with the Header Banner and Quote modules
  const [modules, setModules] = useState<Module[]>([
    initialHeaderBanner,
    ...initialQuoteModules,
    initialHeaderBanner2,
  ]);

  // Additional state for tracking selected module and element
  const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);
  const [selectedElementKey, setSelectedElementKey] = useState<string | null>(
    null
  );

  // Function to set the selected module and element
  const setSelectedModuleAndElement = (
    moduleId: number | null,
    elementKey: string | null
  ) => {
    setSelectedModuleId(moduleId);
    setSelectedElementKey(elementKey);
  };

  // Function to update a specific element in a module
  const updateModuleElement = (
    moduleId: number,
    elementKey: keyof Module["elements"],
    newValue: string
  ) => {
    setModules((currentModules) => {
      return currentModules.map((module) => {
        if (module.id === moduleId) {
          const updatedElements = {
            ...module.elements,
            [elementKey]: { ...module.elements[elementKey], value: newValue },
          };
          return { ...module, elements: updatedElements };
        }
        return module;
      });
    });
  };

  // Context value
  const value = {
    modules,
    selectedModuleId,
    selectedElementKey,
    setSelectedModuleAndElement,
    updateModuleElement,
  };

  return (
    <ModulesContext.Provider value={value}>{children}</ModulesContext.Provider>
  );
};

export { ModulesContext, ModulesProvider };
