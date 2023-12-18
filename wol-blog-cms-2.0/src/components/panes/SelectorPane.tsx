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
} from "../../svgs";
import { ModulesContext } from "@/context/ModulesContext";
import { createHeaderBannerModule, createQuoteModule } from "@/factories"; // Assuming these factories are exported
import {
  SelectorPaneContainer,
  SelectorPaneHeader,
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
    const newId = Math.max(0, ...modules.map((m) => m.id)) + 1; // Generate a new unique ID
    const newModule =
      type === "Header Banner"
        ? createHeaderBannerModule(newId)
        : createQuoteModule(newId);
    setModules([...modules, newModule]);
    setAddMenuOpen(false); // Close the add menu
  };

  const handleDelete = (moduleId: number) => {
    deleteModule(moduleId);
  };

  const handleMove = (moduleId: number, direction: "up" | "down") => {
    console.log("move", moduleId, direction);
    moveModule(moduleId, direction);
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
              <SelectorPaneHeaderTitle>{module.title}</SelectorPaneHeaderTitle>
              <Chevron active={openedModuleIds.includes(module.id)} />
            </SelectorPaneHeader>
            {openedModuleIds.includes(module.id) && (
              <SelectorElementsList>
                {Object.entries(module.elements).map(([key, element]) => (
                  <SelectorElement
                    key={key}
                    onClick={() => {
                      setSelectedModuleAndElement(module.id, key);
                      handleSelectItem(module.id, key);
                    }}
                    isActive={selectedItemId === `${module.id}-${key}`}
                  >
                    {element.title}
                  </SelectorElement>
                ))}
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
        </ModuleList>
      )}
    </SelectorPaneContainer>
  );
};

export default SelectorPane;
