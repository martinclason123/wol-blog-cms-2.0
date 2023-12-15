import styled from "styled-components";
const Svg = styled.svg`
  width: 1.5em;
`;
const TextIcon = () => {
  return (
    <Svg
      viewBox="0 0 20 20"
      class="Polaris-Icon__Svg_375hu"
      focusable="false"
      aria-hidden="true"
    >
      <path
        fill="#303030"
        d="M4 4.75a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-.75h-3.5v8.75h1.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h1.25v-8.75h-3.5v.75a.75.75 0 0 1-1.5 0v-1.5Z"
      ></path>
    </Svg>
  );
};

export default TextIcon;
