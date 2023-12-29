import styled from "styled-components";

const Svg = styled.svg`
  width: 2.5em;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
`;
const BannerIcon = ({ onClick }) => {
  return (
    <Svg
      id="uuid-0205f783-95ca-4ba7-a2da-48451472c97d"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 315.24"
    >
      <polygon
        points="315.03 175.53 400 175.53 380.08 142.99 400 113.72 315.03 113.72 315.03 175.53"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="6"
      />
      <polygon
        points="84.97 175.53 0 175.53 19.92 142.99 0 113.72 84.97 113.72 84.97 175.53"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="6"
      />
      <polygon
        points="200.36 201.52 76.11 201.52 55.41 132.63 200.36 132.63 345.32 132.63 324.62 201.52 200.36 201.52"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="6"
      />
    </Svg>
  );
};

export default BannerIcon;
