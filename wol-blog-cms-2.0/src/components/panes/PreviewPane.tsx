"use client";
import React, { useContext } from "react";
import { ModulesContext } from "@/context/ModulesContext";

const PreviewPane = () => {
  const { modules } = useContext(ModulesContext);

  return (
    <div className="preview-pane">
      <h2>Preview Pane</h2>
      {modules.map((module, index) => (
        <div
          key={index}
          style={{ padding: "10px", borderBottom: "1px solid grey" }}
        >
          <h3>{module.title}</h3>
          {Object.entries(module.elements).map(([key, element]) => (
            <p key={key}>
              {element.title}: {element.value}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PreviewPane;
