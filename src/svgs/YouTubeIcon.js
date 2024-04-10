import styled from "styled-components";
const Svg = styled.svg`
  background-color: ${(props) => (props.isActive ? "#ffffff" : "transparent")};
  cursor: pointer;
  width: ${(props) => props.width || "1.5em"};
  flex-shrink: 0;
`;
const YouTubeIcon = ({ width, isActive, onClick }) => {
  return (
    <Svg
      id="uuid-3bf7ebd0-e5f0-4836-a31e-ef6736547ff5"
      data-name="uuid-589f9344-b5c9-46dc-a354-74e47c98d904"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      width={width}
      isActive={isActive}
      onClick={onClick}
    >
      <path
        d="M307.34,70.08H92.66c-42.12,0-76.26,34.14-76.26,76.26v107.31c0,42.12,34.14,76.26,76.26,76.26h214.67c42.12,0,76.26-34.14,76.26-76.26v-107.31c0-42.12-34.14-76.26-76.26-76.26ZM255.76,205.22l-100.41,47.89c-2.68,1.28-5.77-.67-5.77-3.64v-98.77c0-3.01,3.17-4.95,5.85-3.6l100.41,50.88c2.99,1.51,2.93,5.79-.09,7.23Z"
        fill="#000"
        stroke-width="0"
      />
    </Svg>
  );
};

export default YouTubeIcon;
