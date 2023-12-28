// ModuleContext.tsx
"use client";
import React, { createContext, useState, ReactNode } from "react";
import { Module } from "../types/moduleTypes";
import {
  createHeaderBannerModule,
  createQuoteModule,
  createTextModule,
} from "../factories";

type ViewMode = "mobile" | "desktop";

// Define the type for the context state
type ModulesContextState = {
  modules: Module[];
  setModules: (modules: Module[]) => void;
  deleteModule: (moduleId: number) => void;
  moveModule: (moduleId: number, direction: "up" | "down") => void;
  selectedModuleId: number | null;
  selectedElementKey: string | null;
  viewMode: ViewMode;
  toggleViewMode: () => void;
  setSelectedModuleAndElement: (
    moduleId: number | null,
    elementKey: string | null
  ) => void;
  updateModuleElement: (
    moduleId: number,
    elementKey: string,
    newValue: string
  ) => void;
  addParagraphToTextModule: (moduleId: number, newParagraph: string) => void;
  deleteParagraphFromTextModule: (
    moduleId: number,
    paragraphIndex: number
  ) => void;
};

// Define the type for the provider props
interface ModulesProviderProps {
  children: ReactNode;
}

const ModulesContext = createContext<ModulesContextState>({
  modules: [],
  setModules: () => {},
  deleteModule: () => {},
  moveModule: () => {},
  selectedModuleId: null,
  selectedElementKey: null,
  setSelectedModuleAndElement: () => {},
  updateModuleElement: () => {},
  viewMode: "desktop",
  toggleViewMode: () => {},
});

const ModulesProvider: React.FC<ModulesProviderProps> = ({ children }) => {
  const [modules, setModules] = useState<Module[]>([
    createHeaderBannerModule(1),
    createTextModule(3),
    createQuoteModule(2),
  ]);

  const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);
  const [selectedElementKey, setSelectedElementKey] = useState<string | null>(
    null
  );

  const deleteModule = (moduleId: number) => {
    setModules(modules.filter((module) => module.id !== moduleId));
  };

  const moveModule = (moduleId: number, direction: "up" | "down") => {
    const index = modules.findIndex((module) => module.id === moduleId);
    if (index === -1) return; // Module not found

    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= modules.length) return; // New index out of bounds

    const newModules = [...modules];
    const [removedModule] = newModules.splice(index, 1);
    newModules.splice(newIndex, 0, removedModule);

    setModules(newModules);
  };

  const [viewMode, setViewMode] = useState<ViewMode>("desktop");

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "desktop" ? "mobile" : "desktop"));
  };

  const setSelectedModuleAndElement = (
    moduleId: number | null,
    elementKey: string | null
  ) => {
    setSelectedModuleId(moduleId);
    setSelectedElementKey(elementKey);
  };

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

  // Function to add a paragraph to a TextModule
  const addParagraphToTextModule = (moduleId: number, newParagraph: string) => {
    setModules((currentModules) => {
      return currentModules.map((module) => {
        if (module.id === moduleId && module.title === "Text") {
          const updatedModule = module as TextModule;
          updatedModule.elements.paragraphs.value.push(newParagraph);
          return updatedModule;
        }
        return module;
      });
    });
  };

  // Function to delete a paragraph from a TextModule
  const deleteParagraphFromTextModule = (
    moduleId: number,
    paragraphIndex: number
  ) => {
    setModules((currentModules) => {
      return currentModules.map((module) => {
        if (module.id === moduleId && module.title === "Text") {
          const updatedModule = module as TextModule;
          updatedModule.elements.paragraphs.value.splice(paragraphIndex, 1);
          return updatedModule;
        }
        return module;
      });
    });
  };

  const value = {
    modules,
    setModules,
    deleteModule,
    moveModule,
    selectedModuleId,
    selectedElementKey,
    setSelectedModuleAndElement,
    updateModuleElement,
    viewMode,
    toggleViewMode,
    addParagraphToTextModule,
    deleteParagraphFromTextModule,
  };

  return (
    <ModulesContext.Provider value={value}>{children}</ModulesContext.Provider>
  );
};

export { ModulesContext, ModulesProvider };
