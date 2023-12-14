"use client";
import React, { createContext, useState, ReactNode } from "react";
import { Module } from "../types/moduleTypes";
import { createHeaderBannerModule, createQuoteModule } from "../factories";

// Define the type for the context state
type ModulesContextState = {
  modules: Module[];
  setModules: (modules: Module[]) => void; // Add setModules to the context state type
  selectedModuleId: number | null;
  selectedElementKey: string | null;
  setSelectedModuleAndElement: (
    moduleId: number | null,
    elementKey: string | null
  ) => void;
  updateModuleElement: (
    moduleId: number,
    elementKey: string,
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
  setModules: () => {}, // Initialize setModules
  selectedModuleId: null,
  selectedElementKey: null,
  setSelectedModuleAndElement: () => {},
  updateModuleElement: () => {},
});

// Define the provider component
const ModulesProvider: React.FC<ModulesProviderProps> = ({ children }) => {
  // Initial state with default modules
  const [modules, setModules] = useState<Module[]>([
    createHeaderBannerModule(1),
    createQuoteModule(2),
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
    elementKey: string,
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
    setModules, // Include setModules in the context value
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
