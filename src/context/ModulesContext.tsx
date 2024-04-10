// ModuleContext.tsx
"use client";
import React, { createContext, useState, ReactNode, useEffect } from "react";
import { Module } from "../types/moduleTypes";
import {
  createHeaderBannerModule,
  createQuoteModule,
  createTextModule,
  createImageWithQuoteModule,
  createImageWithTextModule,
  createImageModule,
  createYouTubeVideoModule,
  createProductsModule,
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
  previewContent: ViewMode;
  setPreviewContent: () => void;
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
  imageGallery: string[]; // Array of image URLs
  uploadImage: (file: File) => Promise<void>;
  imagesPath: string;
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
  previewContent: "preview",
  setPreviewContent: () => {},
  fetchImageAttributes: async () => null,
});

const ModulesProvider: React.FC<ModulesProviderProps> = ({ children }) => {
  const [modules, setModules] = useState<Module[]>([
    createHeaderBannerModule(1),
    // createTextModule(3),
    // createQuoteModule(2),
    // createImageWithQuoteModule(4),
    // createImageModule(5),
    // createImageWithTextModule(6),
    // createYouTubeVideoModule(7),
    // createProductsModule(8),
  ]);

  const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);
  const [selectedElementKey, setSelectedElementKey] = useState<string | null>(
    null
  );

  const [imageGallery, setImageGallery] = useState<string[]>([]);
  const [imagesPath, setImagesPath] = useState<string>(
    "/content/seasonal-content/blog/"
  );

  // Function to initialize the image gallery
  const initializeImageGallery = async () => {
    try {
      const response = await fetch("/api/getGallery"); // replace with your API endpoint
      const data = await response.json();

      setImageGallery(data); // assuming the API returns an object with an 'images' array
    } catch (error) {
      console.error("Error loading images:", error);
    }
  };

  // Initialize the image gallery on mount
  useEffect(() => {
    initializeImageGallery();
  }, []);

  // Function to handle image upload
  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("files", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      // Update the image gallery state
      setImageGallery((prevGallery) => [...prevGallery, data.imageUrl]);
      initializeImageGallery();
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  // Function to fetch image attributes
  const fetchImageAttributes = async (imageName: string) => {
    try {
      const response = await fetch("/api/attributes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageName }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching image attributes:", error);
      return null; // or handle the error as you see fit
    }
  };

  // Function to delete an image
  const deleteImage = async (imageName: string) => {
    try {
      // save the imageName from the url as a variable
      const queryString = `/api/delete?imageName=${encodeURIComponent(
        imageName
      )}`;
      console.log("queryString", queryString);
      const response = await fetch(
        `/api/delete?imageName=${encodeURIComponent(imageName)}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();

      if (data.success) {
        // Update the image gallery to remove the deleted image
        setImageGallery((prevGallery) =>
          prevGallery.filter((image) => image !== imageName)
        );
      }
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

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

  const [previewContent, setPreviewContent] = useState<ViewMode>("preview");

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
    previewContent,
    setPreviewContent,
    addParagraphToTextModule,
    deleteParagraphFromTextModule,
    imageGallery,
    setImageGallery,
    uploadImage,
    deleteImage,
    fetchImageAttributes,
    imagesPath,
    setImagesPath,
  };

  return (
    <ModulesContext.Provider value={value}>{children}</ModulesContext.Provider>
  );
};

export { ModulesContext, ModulesProvider };
