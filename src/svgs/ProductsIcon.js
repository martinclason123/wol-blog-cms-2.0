import styled from "styled-components";
const Svg = styled.svg`
  background-color: ${(props) => (props.isActive ? "#ffffff" : "transparent")};
  cursor: pointer;
  width: ${(props) => props.width || "1.5em"};
  flex-shrink: 0;
`;
const ProductsIcon = ({ width, isActive, onClick }) => {
  return (
    <Svg
      width={width}
      isActive={isActive}
      onClick={onClick}
      id="uuid-f7fa6a33-8037-4edf-8f22-996f63b6d284"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        d="M451.11,58.52c-35.05-35.04-93.78-33.33-130.94,3.82-7.87,7.87-14.13,16.72-18.81,26.09l-24.95,2.06c-7.28.6-14.12,3.77-19.29,8.94L44.73,311.84c-12.06,12.06-12.06,31.61,0,43.66l114.14,114.14c12.06,12.06,31.61,12.06,43.66,0l212.4-212.4c5.17-5.17,8.33-12,8.94-19.28l2.7-32.57c7.51-4.35,14.46-9.67,20.72-15.93,37.15-37.16,38.87-95.89,3.82-130.94ZM429.2,173.61l4.97-60.09c.75-9.04-2.52-17.96-8.94-24.38-6.42-6.42-15.33-9.69-24.38-8.94l-38.24,3.16c-2.06,1.65-4.05,3.41-5.93,5.29-18.21,18.21-24.54,43.53-18.57,65.34,4.95,1.83,9.59,4.73,13.56,8.7,14.76,14.76,14.76,38.69,0,53.45-14.76,14.76-38.69,14.76-53.45,0-14.4-14.4-14.74-37.51-1.06-52.34,4.19,10.8,10.57,20.85,19.19,29.47,4.68,4.68,12.26,4.68,16.94,0s4.68-12.26,0-16.94c-25.7-25.7-23.99-69.24,3.82-97.05,27.81-27.81,71.35-29.53,97.05-3.82,25.7,25.7,23.99,69.24-3.82,97.05-.38.38-.77.73-1.15,1.1Z"
        fill="#000"
        stroke-width="0"
      />
    </Svg>
  );
};

export default ProductsIcon;