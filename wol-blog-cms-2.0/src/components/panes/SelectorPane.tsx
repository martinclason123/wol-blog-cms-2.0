"use client";
import React, { useContext } from "react";
import { ModulesContext } from "@/context/ModulesContext";
const SelectorPane = () => {
  const { modules } = useContext(ModulesContext);

  return (
    <div>
      <h2>Selector Pane</h2>
      {/* Module list and add button functionality goes here */}
    </div>
  );
};

export default SelectorPane;
