import styled from "styled-components";
import { Container } from "./commonStyles";

export const PreviewPaneContainer = styled(Container)`
  width: 80%;
  border-left: 1px solid #f1f1f1;
  border-right: 1px solid #f1f1f1;
  height: 100vh;
  overflow-y: scroll;
  padding-top: 1em;
`;

export const PreviewModulesWrapper = styled.div`
  margin: 0 auto;
  width: ${(props) => (props.viewMode === "desktop" ? "1100px" : "640px")};
`;
