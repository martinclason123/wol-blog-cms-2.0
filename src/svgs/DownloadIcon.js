import styled from "styled-components";
const Svg = styled.svg`
  background-color: ${(props) => (props.isActive ? "#ffffff" : "transparent")};
  cursor: pointer;
  width: ${(props) => props.width || "1.5em"};
  flex-shrink: 0;
`;
const DownloadIcon = ({ width, isActive, onClick }) => {
  return (
    <Svg
      id="uuid-761e567a-86e3-40ca-a873-33f709135b45"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35 35"
      width={width}
      isActive={isActive}
      onClick={onClick}
    >
      <path
        d="M28.29,21.37v2.94c0,.75-.6,1.35-1.35,1.35H8.06c-.75,0-1.35-.6-1.35-1.35v-2.94c0-.75-.6-1.35-1.35-1.35h0c-.75,0-1.35.6-1.35,1.35v3.4c0,1.99,1.61,3.6,3.6,3.6h19.78c1.99,0,3.6-1.61,3.6-3.6v-3.4c0-.75-.6-1.35-1.35-1.35h0c-.75,0-1.35.6-1.35,1.35Z"
        fill="#303030"
        stroke-width="0"
      />
      <g>
        <path
          d="M19.34,19.28h-3.68v-10.81c0-1.02.82-1.84,1.84-1.84h0c1.02,0,1.84.82,1.84,1.84v10.81Z"
          fill="#303030"
          stroke-width="0"
        />
        <path
          d="M25.96,13.28h0c-.72-.72-1.88-.72-2.6,0l-5.85,5.85-5.85-5.85c-.72-.72-1.88-.72-2.6,0h0c-.72.72-.72,1.88,0,2.6l7.36,7.36c.61.61,1.59.61,2.19,0l7.36-7.36c.72-.72.72-1.88,0-2.6Z"
          fill="#303030"
          stroke-width="0"
        />
      </g>
    </Svg>
  );
};

export default DownloadIcon;
