// "use client";
import styled from "styled-components";
import Editor from "@monaco-editor/react";
import React, { useContext, useState, useEffect } from "react";
import beautify from "js-beautify";
import { ModulesContext } from "@/context/ModulesContext";

export const PreviewModulesWrapper = styled.div`
  margin: 0 auto;
  width: ${(props) => (props.viewMode === "desktop" ? "1100px" : "640px")};
`;

const Code = () => {
  const { modules, imagesPath } = useContext(ModulesContext);
  const [formattedCode, setFormattedCode] = useState("");
  console.log("imagesPath: ", imagesPath);

  useEffect(() => {
    let combinedCode = "<section>";
    modules.forEach((module) => {
      if (module.snippet && module.elements) {
        combinedCode += module.snippet(module.elements, imagesPath);
      }
    });
    combinedCode += "</section>";

    // Format the combined code using js-beautify
    const formatted = beautify.html(combinedCode);

    setFormattedCode(formatted);
  }, [modules]);

  return (
    <Editor height="90vh" defaultLanguage="html" defaultValue={formattedCode} />
  );
};

export default Code;
