import styled from "styled-components";
const Svg = styled.svg`
  background-color: ${(props) => (props.isActive ? "#ffffff" : "transparent")};
  cursor: pointer;
  width: ${(props) => props.width || "1.5em"};
  flex-shrink: 0;
`;
const CodeIcon = ({ width, isActive, onClick }) => {
  return (
    <Svg
      id="uuid-72388f92-d374-4cd2-a53a-8032c8f2d9e1"
      data-name="Layer 4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35 35"
      width={width}
      isActive={isActive}
      onClick={onClick}
    >
      <g>
        <polyline
          points="10.63 24.93 7.45 21.95 4.27 18.97 7.45 15.99 10.63 13.02"
          fill="#fff"
          stroke-width="0"
        />
        <path
          d="M10.63,26.21c-.31,0-.63-.11-.87-.35l-6.37-5.96c-.26-.24-.41-.58-.41-.93s.15-.69.41-.93l3.18-2.98,3.18-2.98c.52-.48,1.33-.46,1.81.06.48.52.46,1.33-.06,1.81l-5.37,5.02,5.37,5.02c.52.48.54,1.29.06,1.81-.25.27-.59.41-.93.41Z"
          fill="#303030"
          stroke-width="0"
        />
      </g>
      <g>
        <polyline
          points="24.37 24.93 27.55 21.95 30.73 18.97 27.55 15.99 24.37 13.02"
          fill="#fff"
          stroke-width="0"
        />
        <path
          d="M24.37,26.21c-.34,0-.68-.14-.93-.41-.48-.52-.46-1.33.06-1.81l5.37-5.02-2.18-2.04-3.18-2.98c-.52-.48-.54-1.29-.06-1.81.48-.52,1.29-.54,1.81-.06l3.18,2.98,3.18,2.98c.26.24.41.58.41.93s-.15.69-.41.93l-6.37,5.96c-.25.23-.56.35-.87.35Z"
          fill="#303030"
          stroke-width="0"
        />
      </g>
      <path
        d="M14.65,28.3c-.15,0-.3-.03-.45-.08-.66-.25-1-.98-.75-1.65l5.58-15c.25-.66.98-1,1.65-.75.66.25,1,.98.75,1.65l-5.58,15c-.19.52-.68.83-1.2.83Z"
        fill="#303030"
        stroke-width="0"
      />
    </Svg>
  );
};

export default CodeIcon;
