import styled from "styled-components";

const Svg = styled.svg`
  transform: ${(props) => `rotate(${props.degree})`};
  width: 2.5em;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
`;
const UpwardArrow = ({ degree, onClick }) => {
  return (
    <Svg viewBox="0 0 20 20" degree={degree} onClick={onClick}>
      <path
        fillRule="evenodd"
        d="M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
      ></path>
    </Svg>
  );
};

export default UpwardArrow;
