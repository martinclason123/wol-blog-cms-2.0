import styled from "styled-components";
import { Container } from "./commonStyles";

export const EditorPaneWrapper = styled(Container)`
  width: 22%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 1em;
  padding-left: 1em;
  height: 100vh;
  overflow-y: scroll;
  padding-bottom: 20em;
`;

export const EditorElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
`;

export const EditorElementLabel = styled.label`
  font-size: 2.4em;
  display: block;
`;

export const EditorElementInput = styled.textarea`
  font-size: 2.4em;
  min-height: 10em;
`;
