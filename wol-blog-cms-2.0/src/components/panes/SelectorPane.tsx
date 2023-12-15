"use client";
import React, { useContext, useState } from "react";
import { ModulesContext } from "@/context/ModulesContext";
import { createHeaderBannerModule, createQuoteModule } from "@/factories"; // Assuming these factories are exported

const SelectorPane = () => {
  const {
    modules,
    setModules,
    deleteModule,
    moveModule,
    setSelectedModuleAndElement,
  } = useContext(ModulesContext);
  const [openedModuleId, setOpenedModuleId] = useState<number | null>(null);
  const [isAddMenuOpen, setAddMenuOpen] = useState(false);

  const toggleModule = (moduleId: number) => {
    if (openedModuleId === moduleId) {
      setOpenedModuleId(null);
    } else {
      setOpenedModuleId(moduleId);
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
    moveModule(moduleId, direction);
  };

  return (
    <div className="selector-pane">
      <h2>Selector Pane</h2>
      {modules.map((module) => (
        <div key={module.id}>
          <div
            className="module-selector"
            onClick={() => toggleModule(module.id)}
          >
            <span>{module.title}</span>
          </div>
          {openedModuleId === module.id && (
            <div className="module-elements">
              {Object.entries(module.elements).map(([key, element]) => (
                <div
                  key={key}
                  onClick={() => setSelectedModuleAndElement(module.id, key)}
                >
                  {element.title}
                </div>
              ))}
              <div className="module-controllers">
                <button onClick={() => handleMove(module.id, "up")}>^</button>
                <button onClick={() => handleMove(module.id, "down")}>ˇ</button>
                <button onClick={() => handleDelete(module.id)}>x</button>
              </div>
            </div>
          )}
        </div>
      ))}
      <button onClick={() => setAddMenuOpen(!isAddMenuOpen)}>
        {isAddMenuOpen ? "-" : "+"}
      </button>
      {isAddMenuOpen && (
        <div>
          <button onClick={() => addModule("Header Banner")}>
            Header Banner
          </button>
          <button onClick={() => addModule("Quote")}>Quote</button>
        </div>
      )}
    </div>
  );
};

export default SelectorPane;
