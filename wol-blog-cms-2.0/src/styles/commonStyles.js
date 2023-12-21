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
