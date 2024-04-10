import styled from "styled-components";
import { ModulePreviewContainer } from "../commonStyles";

export const TextPreviewContainer = styled(ModulePreviewContainer)`
  margin: 0 5em;
`;

export const Text = styled.p`
  font-size: 2.4em;
  line-height: 1.1;
  margin-bottom: 1em;
  overflow-wrap: break-word;
  hyphens: auto;
  @container (min-width: 1100px) {
    font-size: 3.5em;
    line-height: 1.42857;
  }
`;
