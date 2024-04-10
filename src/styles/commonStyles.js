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

export const PreviewBoxContainer = styled.div`
  display: block;

  ${(props) => {
    switch (props.imageWidth) {
      case "Wide":
        return `margin: 0 5em 3em 5em;`;
      case "Very wide":
        return `margin: 3em 1em;`;
      case "Full-width":
        return `margin: 0 0 3em 0;`;
      default:
        return `margin: 0 5em 3em 5em;`;
    }
  }}
  position: relative;
  @container (max-width: 1059px) {
    ${(props) =>
      props.mobileReverse === "true" ? `display: flex;` : "display: block;"}
    ${(props) => (props.mobileReverse ? `flex-direction: column-reverse;` : "")}
  }
  @container (min-width: 1100px) {
    display: flex;
    ${(props) =>
      props.desktopReverse === "true" && `flex-direction: row-reverse;`}
    align-items: center;
    justify-content: center;
    ${(props) => {
      switch (props.imageWidth) {
        case "Wide":
          return `margin: 0 8em 6em;`;
        case "Very wide":
          return `margin: 0 8em 6em;`;
        case "Full-width":
          return `margin: 0 0 6em 0;`;
        default:
          return `margin: 0 23em;`;
      }
    }}
  }
`;

export const PreviewBoxContainerWide = styled(PreviewBoxContainer)`
  @container (min-width: 1100px) {
    margin: 0 8em 6em;
  }
`;
export const PreviewHalfBlock = styled.div`
  @container (min-width: 1100px) {
    width: 50%;
  }

  @container (max-width: 1059px) {
    p:first-of-type {
      ${(props) =>
        props.mobileReverse === "true" ? `margin-top: 0em` : "margin-top: 1em"}
    }
  }

  @container (min-width: 1100px) {
    p {
      ${(props) =>
        props.desktopReverse === "true"
          ? `margin-right: 2em`
          : "margin-left: 2em"}
    }
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

export const Quote = styled.p`
  font-size: 4.8em;
  font-weight: 200;
  line-height: 1.3;
  text-align: center;
  margin: 0.75em auto;
  ${(props) => (props.width ? `width: ${props.width}%` : `100%`)};
  color: #737d85;
  @container (min-width: 1100px) {
    font-size: 7.5em;
    line-height: 1.06667;
  }
`;

export const ProductsBox = styled.div`
  margin: 0 10em;

  @container (min-width: 1100px) {
    display: flex;
    margin: 8em 0em 2em;
  }
`;

export const Product = styled.div`
  @container (min-width: 1100px) {
    width: 25%;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const ProductCTA = styled.p`
  font-size: 3.6em;
  font-weight: 600;
  text-align: center;
  margin: 1em 0;
  color: #a41e21;

  @container (min-width: 1100px) {
    font-size: 2.2em;
  }
`;
