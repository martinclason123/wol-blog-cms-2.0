import styled from "styled-components";
const Svg = styled.svg`
  background-color: ${(props) => (props.isActive ? "#ffffff" : "transparent")};
  cursor: pointer;
  width: ${(props) => props.width || "2.5em"};
  flex-shrink: 0;
`;
const ImageWithTextIcon = ({ width, isActive, onClick }) => {
  return (
    // <Svg
    //   width={width}
    //   isActive={isActive}
    //   onClick={onClick}
    //   id="uuid-d721d84f-2271-4a48-8ad5-3221d0542b7a"
    //   data-name="Layer 1"
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 400 400"
    // >
    //   <rect
    //     x="4.42"
    //     y="5.03"
    //     width="390.33"
    //     height="390.33"
    //     rx="9.62"
    //     ry="9.62"
    //     fill="none"
    //     stroke="#010101"
    //     stroke-miterlimit="10"
    //     stroke-width="8.87"
    //   />
    //   <g>
    //     <g>
    //       <polygon
    //         points="109.1 173.08 291.08 173.08 239.09 69.09 181.65 143.83 145.15 108.08 109.1 173.08"
    //         fill="#010101"
    //         stroke="#010101"
    //         stroke-miterlimit="10"
    //         stroke-width="8.87"
    //       />
    //       <circle
    //         cx="193.59"
    //         cy="47.43"
    //         r="8.67"
    //         fill="#010101"
    //         stroke="#010101"
    //         stroke-miterlimit="10"
    //         stroke-width="8.87"
    //       />
    //     </g>
    //     <g>
    //       <path
    //         d="M99.85,203.63h86.21v76.31c0,57.72-31.66,81.29-86.05,81.29,42.73-28.51,42.94-35.43,42.94-81.29h-43.1v-76.31Z"
    //         fill="#010101"
    //         fill-rule="evenodd"
    //         stroke-width="0"
    //       />
    //       <path
    //         d="M213.94,203.63h86.21v76.31c0,57.72-31.66,81.29-86.05,81.29,42.74-28.51,42.94-35.43,42.94-81.29h-43.11v-76.31Z"
    //         fill="#010101"
    //         fill-rule="evenodd"
    //         stroke-width="0"
    //       />
    //     </g>
    //   </g>
    // </Svg>
    <Svg
      id="uuid-7da48e59-9981-4a64-bed9-9c46a1328c61"
      width={width}
      isActive={isActive}
      onClick={onClick}
      data-name="uuid-589f9344-b5c9-46dc-a354-74e47c98d904"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
    >
      <rect
        x="4.87"
        y="6.32"
        width="390.25"
        height="390.25"
        rx="23.19"
        ry="23.19"
        fill="none"
        stroke="#010101"
        stroke-miterlimit="10"
        stroke-width="8.87"
      />
      <g>
        <g>
          <polygon
            points="131.42 143.61 268.58 143.61 229.38 65.24 186.11 121.56 158.6 94.63 131.42 143.61"
            fill="#010101"
            stroke="#010101"
            stroke-miterlimit="10"
            stroke-width="8.87"
          />
          <circle
            cx="173.87"
            cy="48.91"
            r="6.53"
            fill="#010101"
            stroke="#010101"
            stroke-miterlimit="10"
            stroke-width="8.87"
          />
        </g>
        <path
          d="M163.72,357.62v-8.8l19.36-5.75c1.42-.4,2.54-1.04,3.35-1.94.82-.89,1.22-2.2,1.22-3.93v-133.78h-38.72c-1.25,0-2.34.39-3.29,1.17s-1.53,1.88-1.76,3.29l-4.68,25.23h-13.73v-43.77h149.05v43.77h-13.73l-4.71-25.23c-.3-1.57-.9-2.71-1.76-3.41-.86-.71-1.91-1.05-3.16-1.05h-38.85v133.78c0,1.73.45,3.04,1.35,3.93.9.9,1.98,1.55,3.22,1.94l19.36,5.75v8.8h-72.53,0Z"
          fill="#010101"
          stroke-width="0"
        />
      </g>
    </Svg>
  );
};

export default ImageWithTextIcon;
