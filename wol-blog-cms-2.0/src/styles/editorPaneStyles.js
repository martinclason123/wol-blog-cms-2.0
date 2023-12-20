import styled from "styled-components";
import { Container } from "./commonStyles";

export const EditorPaneWrapper = styled(Container)`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 1em;
  padding-left: 1em;
`;

export const EditorElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const EditorElementLabel = styled.label`
  font-size: 2.4em;
  display: block;
`;

export const EditorElementInput = styled.input`
  font-size: 2.4em;
`
