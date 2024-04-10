import { on } from "events";
import styled from "styled-components";
const Svg = styled.svg`
  background-color: ${(props) => (props.isActive ? "#ffffff" : "transparent")};
  cursor: pointer;
  width: ${(props) => props.width || "1.5em"};
  flex-shrink: 0;
`;
const PreviewIcon = ({ width, isActive, onClick }) => {
  return (
    <Svg
      id="uuid-eb4b5526-5079-42b7-bde2-f211c48b930d"
      data-name="Layer 5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35 35"
      width={width}
      isActive={isActive}
      onClick={onClick}
    >
      <path
        d="M25.33,24.52c0,.78-.63,1.41-1.41,1.41h-14.24c-.78,0-1.41-.63-1.41-1.41v-14.24c0-.78.63-1.41,1.41-1.41h11.04l2.27-2.27h-13.3c-2.03,0-3.68,1.65-3.68,3.68v14.24c0,2.03,1.65,3.68,3.68,3.68h14.24c2.03,0,3.68-1.65,3.68-3.68v-11.32l-2.27,2.27v9.05Z"
        fill="#333"
        stroke-width="0"
      />
      <path
        d="M25.24,6.75c-.12.12-9.92,9.92-10.05,10.05l-.94,3.68c-.07.28.18.53.46.46l3.68-.94c.09-.09,9.96-9.96,10.05-10.05-.05-.05-3.15-3.15-3.2-3.2Z"
        fill="#333"
        stroke-width="0"
      />
      <path
        d="M29.4,5.8c-.88-.88-2.32-.88-3.2,0l-.08.08,3.2,3.2.08-.08c.88-.88.89-2.32,0-3.2Z"
        fill="#333"
        stroke-width="0"
      />
    </Svg>
  );
};

export default PreviewIcon;
