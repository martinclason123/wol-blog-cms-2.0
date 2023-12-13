"use client";
import React, { useContext, useState, useEffect } from "react";
import { ModulesContext } from "../context/ModulesContext";

const ModuleComponent = () => {
  const { modules, updateModuleElement } = useContext(ModulesContext);

  // Function to handle input change and update the context
  const handleInputChange = (moduleId, elementKey, newValue) => {
    updateModuleElement(moduleId, elementKey, newValue);
  };

  return (
    <div>
      <h2>ModuleComponent</h2>
      {modules.map((module, index) => (
        <div
          key={index}
          style={{ marginBottom: "20px", borderBottom: "2px solid black" }}
        >
          <h3>Module ID: {module.id}</h3>
          {Object.entries(module.elements).map(([key, element]) => (
            <div key={key}>
              <strong>{element.title}: </strong>
              <span>{element.value}</span>{" "}
              <input
                type="text"
                value={element.value}
                onChange={(e) =>
                  handleInputChange(module.id, key, e.target.value)
                }
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ModuleComponent;
