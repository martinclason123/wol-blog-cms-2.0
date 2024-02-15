import styled from "styled-components";
const Svg = styled.svg`
  background-color: ${(props) => (props.isActive ? "#ffffff" : "transparent")};
  cursor: pointer;
  width: ${(props) => props.width || "2.5em"};
  flex-shrink: 0;
`;
const ImageWithQuoteIcon = ({ width, isActive, onClick }) => {
  return (
    <Svg
      width={width}
      isActive={isActive}
      onClick={onClick}
      id="uuid-d721d84f-2271-4a48-8ad5-3221d0542b7a"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
    >
      <rect
        x="4.42"
        y="5.03"
        width="390.33"
        height="390.33"
        rx="9.62"
        ry="9.62"
        fill="none"
        stroke="#010101"
        stroke-miterlimit="10"
        stroke-width="8.87"
      />
      <g>
        <g>
          <polygon
            points="109.1 173.08 291.08 173.08 239.09 69.09 181.65 143.83 145.15 108.08 109.1 173.08"
            fill="#010101"
            stroke="#010101"
            stroke-miterlimit="10"
            stroke-width="8.87"
          />
          <circle
            cx="193.59"
            cy="47.43"
            r="8.67"
            fill="#010101"
            stroke="#010101"
            stroke-miterlimit="10"
            stroke-width="8.87"
          />
        </g>
        <g>
          <path
            d="M99.85,203.63h86.21v76.31c0,57.72-31.66,81.29-86.05,81.29,42.73-28.51,42.94-35.43,42.94-81.29h-43.1v-76.31Z"
            fill="#010101"
            fill-rule="evenodd"
            stroke-width="0"
          />
          <path
            d="M213.94,203.63h86.21v76.31c0,57.72-31.66,81.29-86.05,81.29,42.74-28.51,42.94-35.43,42.94-81.29h-43.11v-76.31Z"
            fill="#010101"
            fill-rule="evenodd"
            stroke-width="0"
          />
        </g>
      </g>
    </Svg>
  );
};

export default ImageWithQuoteIcon;
