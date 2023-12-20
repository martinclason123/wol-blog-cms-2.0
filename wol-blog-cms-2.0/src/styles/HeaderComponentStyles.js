import styled from "styled-components";
import { Container } from "./commonStyles";

export const HeaderComponentContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6em;
  border-bottom: 1px solid #f1f1f1;
`;

export const HeaderComponentButtons = styled.div`
  background-color: #f1f1f1;
  border-radius: 0.5em;
  padding: 0.25em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
