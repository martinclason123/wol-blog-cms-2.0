import styled from "styled-components";
const Svg = styled.svg`
  background-color: ${(props) => (props.isActive ? "#ffffff" : "transparent")};
  cursor: pointer;
  width: ${(props) => props.width || "1.5em"};
  flex-shrink: 0;
`;
const ZipIcon = ({ width, isActive, onClick, fill }) => {
  return (
    <Svg
      id="uuid-f3021daa-158e-48a0-a9c7-ebefbf9a0c0b"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 11.64 52.96"
      width={width}
      isActive={isActive}
      onClick={onClick}
    >
      <g>
        <rect
          x=".88"
          width="5.38"
          height="5.38"
          fill={fill || "#342c37"}
          stroke-width="0"
        />
        <rect
          x=".88"
          y="10.76"
          width="5.38"
          height="5.38"
          fill={fill || "#342c37"}
          stroke-width="0"
        />
        <rect
          x=".88"
          y="21.53"
          width="5.38"
          height="5.38"
          fill={fill || "#342c37"}
          stroke-width="0"
        />
        <rect
          x=".88"
          y="32.29"
          width="5.38"
          height="5.38"
          fill={fill || "#342c37"}
          stroke-width="0"
        />
        <rect
          x="6.26"
          y="5.38"
          width="5.38"
          height="5.38"
          fill={fill || "#342c37"}
          stroke-width="0"
        />
        <rect
          x="6.26"
          y="16.15"
          width="5.38"
          height="5.38"
          fill={fill || "#342c37"}
          stroke-width="0"
        />
        <rect
          x="6.26"
          y="26.91"
          width="5.38"
          height="5.38"
          fill={fill || "#342c37"}
          stroke-width="0"
        />
      </g>
      <g>
        <path
          d="M10.34,47.39c.22,3.02-2.15,5.57-5.16,5.57s-5.18-2.33-5.18-5.18c0-.14,0-.26.01-.4l.7-9.2c.07-.91.83-1.6,1.74-1.6h5.46c.91,0,1.66.7,1.74,1.6l.7,9.2Z"
          fill={fill || "#342c37"}
          stroke-width="0"
        />
        <path
          d="M8.36,47.54c.07.9-.23,1.76-.85,2.42-.61.66-1.44,1.02-2.34,1.02-1.76,0-3.19-1.43-3.19-3.19,0-.08,0-.15,0-.22l6.37-.03Z"
          fill="#e9edf4"
          stroke-width="0"
        />
      </g>
    </Svg>
  );
};

export default ZipIcon;
