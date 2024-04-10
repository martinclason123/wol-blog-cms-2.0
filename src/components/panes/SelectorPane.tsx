"use client";
import React, { useContext, useState } from "react";
import {
  Chevron,
  UpwardArrow,
  Trash,
  Plus,
  TextIcon,
  Quote,
  BannerIcon,
  ImageWithQuoteIcon,
  ImageWithTextIcon,
  ImageIcon,
  YouTubeIcon,
  ProductsIcon,
} from "../../svgs";
import { ModulesContext } from "@/context/ModulesContext";
import {
  createHeaderBannerModule,
  createQuoteModule,
  createTextModule,
  createImageWithQuoteModule,
  createImageWithTextModule,
  createImageModule,
  createYouTubeVideoModule,
  createProductsModule,
} from "@/factories"; // Assuming these factories are exported
import {
  SelectorPaneContainer,
  SelectorPaneHeader,
  SelectorTitleWrapper,
  SelectorPaneHeaderTitle,
  SelectorPaneList,
  SelectorElementsList,
  SelectorElement,
  SelectorModuleControllers,
  SelectorModuleMovers,
  SelectorAddModule,
  SelectorAddModuleText,
  ModuleList,
  ModuleItem,
  ModuleItemText,
  SelectorElementTitle,
} from "@/styles/SelectorPaneStyles";

const SelectorPane = () => {
  const {
    modules,
    setModules,
    deleteModule,
    moveModule,
    setSelectedModuleAndElement,
  } = useContext(ModulesContext);
  const [openedModuleIds, setOpenedModuleIds] = useState([]);
  const [isAddMenuOpen, setAddMenuOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleSelectItem = (moduleId, elementKey) => {
    console.log("Selecting module:", moduleId, "Element:", elementKey);
    setSelectedItemId(`${moduleId}-${elementKey}`);
  };

  const toggleModule = (moduleId: number) => {
    if (openedModuleIds.includes(moduleId)) {
      setOpenedModuleIds(openedModuleIds.filter((id) => id !== moduleId));
    } else {
      setOpenedModuleIds([...openedModuleIds, moduleId]);
    }
  };

  const addModule = (type: string) => {
    const newId = Math.max(0, ...modules.map((m) => m.id)) + 1;
    let newModule;
    switch (type) {
      case "Header Banner":
        newModule = createHeaderBannerModule(newId);
        break;
      case "Quote":
        newModule = createQuoteModule(newId);
        break;
      case "Text":
        newModule = createTextModule(newId);
        break;
      case "Image With Quote":
        newModule = createImageWithQuoteModule(newId);
        break;
      case "Image With Text":
        newModule = createImageWithTextModule(newId);
        break;
      case "Image":
        newModule = createImageModule(newId);
        break;
      case "YouTube Video":
        newModule = createYouTubeVideoModule(newId);
        break;
      case "Products":
        newModule = createProductsModule(newId);
        break;
      default:
        return; // Optional: handle unknown module type
    }
    setModules([...modules, newModule]);
    setAddMenuOpen(false);
  };

  const handleDelete = (moduleId: number) => {
    deleteModule(moduleId);
  };

  const handleMove = (moduleId: number, direction: "up" | "down") => {
    console.log("move", moduleId, direction);
    moveModule(moduleId, direction);
  };

  const addParagraphToModule = (moduleId) => {
    const newParagraph = "New paragraph"; // Default text for new paragraph
    setModules(
      modules.map((module) => {
        if (module.id === moduleId && "paragraphs" in module.elements) {
          return {
            ...module,
            elements: {
              ...module.elements,
              paragraphs: {
                ...module.elements.paragraphs,
                value: [...module.elements.paragraphs.value, newParagraph],
              },
            },
          };
        }
        return module;
      })
    );
  };

  const deleteParagraphFromModule = (moduleId, paragraphIndex) => {
    setModules(
      modules.map((module) => {
        if (module.id === moduleId && "paragraphs" in module.elements) {
          const updatedParagraphs = [...module.elements.paragraphs.value];
          updatedParagraphs.splice(paragraphIndex, 1); // Remove the paragraph at the specified index
          return {
            ...module,
            elements: {
              ...module.elements,
              paragraphs: {
                ...module.elements.paragraphs,
                value: updatedParagraphs,
              },
            },
          };
        }
        return module;
      })
    );
  };

  return (
    <SelectorPaneContainer>
      <SelectorPaneList>
        {modules.map((module) => (
          <li key={module.id}>
            <SelectorPaneHeader
              onClick={() => {
                toggleModule(module.id);
                handleSelectItem(module.id, "header");
              }}
              isActive={selectedItemId === `${module.id}-header`}
            >
              <SelectorTitleWrapper>
                {module.icon}
                <SelectorPaneHeaderTitle>
                  {module.title}
                </SelectorPaneHeaderTitle>
              </SelectorTitleWrapper>
              <Chevron active={openedModuleIds.includes(module.id)} />
            </SelectorPaneHeader>

            {openedModuleIds.includes(module.id) && (
              <SelectorElementsList>
                {"paragraphs" in module.elements && (
                  <>
                    {module.elements.paragraphs.value.map(
                      (paragraph, index) => (
                        <SelectorElement
                          key={`paragraph-${index}`}
                          onClick={() => {
                            setSelectedModuleAndElement(
                              module.id,
                              `paragraph-${index}`
                            );
                            handleSelectItem(module.id, `paragraph-${index}`);
                          }}
                          isActive={
                            selectedItemId === `${module.id}-paragraph-${index}`
                          }
                        >
                          <TextIcon />
                          <SelectorElementTitle>
                            Paragraph {index + 1}
                          </SelectorElementTitle>
                          <Trash
                            onClick={() =>
                              deleteParagraphFromModule(module.id, index)
                            }
                          />
                        </SelectorElement>
                      )
                    )}
                    <Plus onClick={() => addParagraphToModule(module.id)} />
                  </>
                )}

                {Object.entries(module.elements).map(
                  ([key, element]) =>
                    key !== "paragraphs" && ( // Exclude paragraphs if they have been rendered above
                      <SelectorElement
                        key={key}
                        onClick={() => {
                          setSelectedModuleAndElement(module.id, key);
                          handleSelectItem(module.id, key);
                        }}
                        isActive={selectedItemId === `${module.id}-${key}`}
                      >
                        {element.icon}
                        <SelectorElementTitle>
                          {element.title}
                        </SelectorElementTitle>
                      </SelectorElement>
                    )
                )}

                <SelectorModuleControllers>
                  <SelectorModuleMovers>
                    <UpwardArrow
                      degree={"-180deg"}
                      onClick={() => handleMove(module.id, "up")}
                    />
                    <UpwardArrow
                      degree={"0deg"}
                      onClick={() => handleMove(module.id, "down")}
                    />
                  </SelectorModuleMovers>
                  <Trash onClick={() => handleDelete(module.id)} />
                </SelectorModuleControllers>
              </SelectorElementsList>
            )}
          </li>
        ))}
      </SelectorPaneList>

      <SelectorAddModule onClick={() => setAddMenuOpen(!isAddMenuOpen)}>
        <Plus />
        <SelectorAddModuleText>Add Module</SelectorAddModuleText>
      </SelectorAddModule>

      {isAddMenuOpen && (
        <ModuleList>
          <ModuleItem onClick={() => addModule("Header Banner")}>
            <BannerIcon />
            <ModuleItemText>Header Banner</ModuleItemText>
          </ModuleItem>
          <ModuleItem onClick={() => addModule("Quote")}>
            <Quote />
            <ModuleItemText>Quote</ModuleItemText>
          </ModuleItem>
          <ModuleItem onClick={() => addModule("Text")}>
            <TextIcon />
            <ModuleItemText>Text Module</ModuleItemText>
          </ModuleItem>
          <ModuleItem onClick={() => addModule("Image With Quote")}>
            <ImageWithQuoteIcon />
            <ModuleItemText>Image With Quote</ModuleItemText>
          </ModuleItem>
          <ModuleItem onClick={() => addModule("Image With Text")}>
            <ImageWithTextIcon />
            <ModuleItemText>Image With Text</ModuleItemText>
          </ModuleItem>
          <ModuleItem onClick={() => addModule("Image")}>
            <ImageIcon />
            <ModuleItemText>Image</ModuleItemText>
          </ModuleItem>
          <ModuleItem onClick={() => addModule("YouTube Video")}>
            <YouTubeIcon />
            <ModuleItemText>YouTube Video</ModuleItemText>
          </ModuleItem>
          <ModuleItem onClick={() => addModule("Products")}>
            <ProductsIcon />
            <ModuleItemText>Products</ModuleItemText>
          </ModuleItem>
        </ModuleList>
      )}
    </SelectorPaneContainer>
  );
};

export default SelectorPane;
