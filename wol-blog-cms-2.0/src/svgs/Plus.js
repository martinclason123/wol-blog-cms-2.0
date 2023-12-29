import styled from "styled-components";

const Svg = styled.svg`
  width: 2.5em;
  transition: transform 0.2s ease-in-out;
  margin-right: 0.5em;
  cursor: pointer;
`;
const Plus = ({ onClick }) => {
  return (
    <Svg viewBox="0 0 20 20" onClick={onClick}>
      <path d="M6.25 10a.75.75 0 0 1 .75-.75h2.25v-2.25a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1-.75-.75Z"></path>
      <path
        fillRule="evenodd"
        d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
      ></path>
    </Svg>
  );
};

export default Plus;
