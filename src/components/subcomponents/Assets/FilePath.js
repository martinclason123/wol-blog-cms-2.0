import styled from "styled-components";
import React, { useState, useContext, useEffect } from "react";
import { ModulesContext } from "@/context/ModulesContext";

const AssetVariables = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 4em 0;
`;

const VariableWrapper = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
`;

const VariableLabel = styled.label`
  font-size: 1.5em;
`;

const VariableInput = styled.input`
  padding: 0.5em;
  font-size: 1.5em;
`;

const FilePath = () => {
  const handleLocalImagePathsChange = (e) => {
    // Update the local state on change
    setLocalImagesPath(e.target.value);
  };

  const handleImagePaths = (e) => {
    // Update the context state on blur
    setImagesPath(e.target.value);
  };

  const { imagesPath, setImagesPath } = useContext(ModulesContext);
  const [localImagesPath, setLocalImagesPath] = useState(imagesPath);
  return (
    <AssetVariables>
      <VariableWrapper>
        <VariableLabel>Images file path</VariableLabel>
        <VariableInput
          onChange={handleLocalImagePathsChange}
          onBlur={handleImagePaths}
          value={localImagesPath}
        />
      </VariableWrapper>
    </AssetVariables>
  );
};

export default FilePath;
