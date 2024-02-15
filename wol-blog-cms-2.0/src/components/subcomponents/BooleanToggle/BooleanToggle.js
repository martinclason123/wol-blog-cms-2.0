import React from "react";
import styled, { css } from "styled-components";

const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
  width: 100%;
`;

const ToggleMessage = styled.span`
  font-size: 1.6em;
`;
const Toggle = styled.div`
  display: inline-block;
  width: 50px; // or any size you want
  height: 25px; // or any size you want
  background: ${({ isActive }) => (isActive ? "darkgrey" : "lightgrey")};
  border-radius: 25px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s;
`;

const ToggleIndicator = styled.div`
  height: 21px;
  width: 21px;
  background-color: white;
  position: absolute;
  top: 2px;
  left: ${({ isActive }) =>
    isActive ? "25px" : "2px"}; // Move right if isActive is true
  border-radius: 50%;
  transition: left 0.2s;
`;

const BooleanToggle = ({ isActive, onToggle, message }) => {
  const handleClick = () => {
    onToggle(!isActive);
  };

  return (
    <ToggleContainer>
      <ToggleMessage>{message}</ToggleMessage>
      <Toggle isActive={isActive} onClick={handleClick}>
        <ToggleIndicator isActive={isActive} />
      </Toggle>
    </ToggleContainer>
  );
};

export default BooleanToggle;
