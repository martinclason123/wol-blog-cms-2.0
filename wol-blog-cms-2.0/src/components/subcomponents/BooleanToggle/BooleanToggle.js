import React from "react";
import styled, { css } from "styled-components";

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

const BooleanToggle = ({ isActive, onToggle }) => {
  const handleClick = () => {
    onToggle(!isActive);
  };

  return (
    <Toggle isActive={isActive} onClick={handleClick}>
      <ToggleIndicator isActive={isActive} />
    </Toggle>
  );
};

export default BooleanToggle;
