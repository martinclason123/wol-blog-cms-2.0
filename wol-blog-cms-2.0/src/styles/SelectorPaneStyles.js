import styled from "styled-components";

import { Container } from "./commonStyles";

export const SelectorPaneContainer = styled(Container)`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 1em;
`;
export const SelectorPaneList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 60%;
  list-style: none;
`;
export const SelectorPaneHeader = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#f1f1f1" : "transparent")};
`;

export const SelectorPaneHeaderTitle = styled.h2`
  font-size: 2.4em;
  text-align: left;
  font-weight: 400;
  padding: 0.25em;
  border-radius: 0.5em;
`;

export const SelectorElementsList = styled(SelectorPaneList)`
  width: 100%;
  padding-left: 1em;
  padding-top: 0.75em;
`;
export const SelectorElement = styled.li`
  font-size: 2.4em;
  cursor: pointer;
  padding: 0.25em;
  border-radius: 0.5em;
  background-color: ${(props) => (props.isActive ? "#f1f1f1" : "transparent")};
`;

export const SelectorModuleControllers = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SelectorModuleMovers = styled.div`
  display: flex;
`;

export const SelectorAddModule = styled.div`
  display: flex;
  gap: 0.5em;
  cursor: pointer;
  width: 60%;
  padding-top: 0.75em;
`;

export const SelectorAddModuleText = styled.p`
  font-size: 2.4em;
  padding: 0.25em;
`;

export const ModuleList = styled(SelectorPaneList)`
  padding-top: 0.75em;
  border-top: 1px solid #f1f1f1;
  margin-top: 0.75em;
`;
export const ModuleItem = styled.li`
  display: flex;
  gap: 1.5em;
  cursor: pointer;
`;
export const ModuleItemText = styled.span`
  font-size: 2.4em;
`;
