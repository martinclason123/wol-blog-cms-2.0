"use client";
import React, { useContext, useState } from "react";
import { ModulesContext } from "@/context/ModulesContext";
import { createHeaderBannerModule, createQuoteModule } from "@/factories"; // Assuming these factories are exported

const SelectorPane = () => {
  const { modules, setModules, setSelectedModuleAndElement } =
    useContext(ModulesContext);
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

  return (
    <div className="selector-pane">
      <h2>Selector Pane</h2>
      {modules.map((module) => (
        <div key={module.id}>
          <button onClick={() => toggleModule(module.id)}>
            {module.title}
          </button>
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
            </div>
          )}
        </div>
      ))}
      <button onClick={() => setAddMenuOpen(!isAddMenuOpen)}>
        {isAddMenuOpen ? "-" : "+"} {/* Toggle button */}
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
