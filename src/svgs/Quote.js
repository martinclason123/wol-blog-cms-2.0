import styled from "styled-components";

const Svg = styled.svg`
  width: 2.5em;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
`;

const Quote = ({ onClick }) => {
  return (
    // <Svg
    //   viewBox="0 0 20 20"
    //   focusable="false"
    //   aria-hidden="true"
    //   onClick={onClick}
    // >
    //   <path d="M3.5 7a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75H4.25V13h2.5a2.25 2.25 0 0 0 2.25-2.25v-3.5A2.25 2.25 0 0 0 6.75 5h-3.5A2.25 2.25 0 0 0 1 7.25v3.5A2.25 2.25 0 0 0 3.25 13h1.5v-2.75H3.5V7Z" />
    //   <path d="M13 7a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75h-2.5V13h2.5a2.25 2.25 0 0 0 2.25-2.25v-3.5a2.25 2.25 0 0 0-2.25-2.25h-3.5a2.25 2.25 0 0 0-2.25 2.25v3.5a2.25 2.25 0 0 0 2.25 2.25h1.5v-2.75h-1.5V7Z" />
    // </Svg>
    <Svg
      id="uuid-9d5eeee1-6c8f-403f-b380-87d059a7eaa5"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 315.24"
    >
      <path
        d="M-.32,0h172.44v152.64c0,115.45-63.33,162.6-172.11,162.6,85.47-57.02,85.88-70.86,85.88-162.6H-.32V0Z"
        fill="#010101"
        fillRule="evenodd"
        strokeWidth="0"
      />
      <path
        d="M227.88,0h172.44v152.64c0,115.45-63.32,162.6-172.11,162.6,85.49-57.02,85.89-70.86,85.89-162.6h-86.23V0Z"
        fill="#010101"
        fillRule="evenodd"
        strokeWidth="0"
      />
    </Svg>
  );
};

export default Quote;
