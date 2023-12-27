import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
  font-size: 1.563vw;

  @media (min-width: ${theme.breakpoints.mobile}) {
    font-size: 0.521vw;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: 10px;
  }
`;

export const ModulePreviewContainer = styled.section`
  font-size: 10px;
  container-type: inline-size;
  font-family: "din-2014", sans-serif;
  position: relative;
  font-size: ${(props) =>
    props.viewMode === "desktop" ? "5.729166666666667px" : "10px"};
  p {
    overflow-wrap: break-word;
    hyphens: auto;
  }
  * {
    padding: 0;
  }
`;

export const Picture = styled.picture`
  width: 100%;
  height: auto;
  display: block;
`;

export const Source = styled.source``;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const PreviewMobilePicture = styled.picture`
  display: block;
  @container (min-width: 1100px) {
    display: none;
  }
`;

export const PreviewDesktopPicture = styled.picture`
  display: none;
  @container (min-width: 1100px) {
    display: block;
  }
`;
