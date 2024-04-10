import styled from "styled-components";

export const Title = styled.h2`
  position: absolute;
  left: 50%;
  top: 48%;
  transform: translate(-50%, -50%);
  font-size: 6.6em;
  font-weight: 800;
  line-height: 0.74303;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  width: 60%;
  text-transform: uppercase;

  @container (min-width: 1100px) {
    top: 42%;
    font-size: 15.96em;
    line-height: 0.75;
    width: 50%;
  }
`;

export const Hero = styled.section`
  position: relative;
  margin: 0;
`;

export const Heading = styled.section`
  text-align: center;
  margin: 3em 0;
  color: #000;
`;

export const BlogName = styled.p`
  font-size: 3.2em;
  font-weight: 600;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
  @container (min-width: 1100px) {
    font-size: 7em;
  }
`;

export const BlogTitle = styled.p`
  font-size: 5.4em;
  font-weight: 200;
  line-height: 1;
  margin: 0 auto;
  max-width: 80%;

  @container (min-width: 1100px) {
    font-size: 12em;
    max-width: 60%;
  }
`;
