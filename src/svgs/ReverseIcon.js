import styled from "styled-components";
const Svg = styled.svg`
  background-color: ${(props) => (props.isActive ? "#ffffff" : "transparent")};
  cursor: pointer;
  width: ${(props) => props.width || "1.5em"};
  flex-shrink: 0;
`;
const ReverseIcon = ({ width, isActive, onClick }) => {
  return (
    <Svg
      width={width}
      isActive={isActive}
      onClick={onClick}
      id="uuid-3b6b49ba-a989-4e48-8d36-fbcee238475f"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3515.12 2823.92"
    >
      <path
        d="M2400.93,1424.99l-1305.51-12.62-2.35,394.36L70.43,942.77,1106.46,76.92l-1.71,423.98,1295.89,15.13M2407.86,1421.04l2.35-394.36,1022.65,863.96-1036.03,865.85,1.71-423.98-1295.9-15.13"
        fill="none"
        stroke="#303030"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="135"
      />
    </Svg>
  );
};

export default ReverseIcon;
