"use client";
import React, { useContext, useState } from "react";
import { ModulesContext } from "@/context/ModulesContext";

const SelectorPane = () => {
  const { modules } = useContext(ModulesContext);
  const [openedModuleId, setOpenedModuleId] = useState<number | null>(null);

  const toggleModule = (moduleId: number) => {
    if (openedModuleId === moduleId) {
      setOpenedModuleId(null); // Close if it's already open
    } else {
      setOpenedModuleId(moduleId); // Open the clicked one
    }
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
                <div key={key}>{element.title}</div>
              ))}
            </div>
          )}
        </div>
      ))}
      {/* Add button functionality can be implemented here */}
    </div>
  );
};

export default SelectorPane;
