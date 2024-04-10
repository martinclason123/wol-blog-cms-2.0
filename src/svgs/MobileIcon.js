import styled from "styled-components";
const Svg = styled.svg`
  background-color: ${(props) => (props.isActive ? "#ffffff" : "transparent")};
  cursor: pointer;
  width: ${(props) => props.width || "3.5em"};
  flex-shrink: 0;
`;
const MobileIcon = ({ isActive, onClick }) => {
  return (
    <Svg
      isActive={isActive}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M8.5 13a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
      <path
        fillRule="evenodd"
        d="M7.5 3a2.75 2.75 0 0 0-2.75 2.75v8.5a2.75 2.75 0 0 0 2.75 2.75h5a2.75 2.75 0 0 0 2.75-2.75v-8.5a2.75 2.75 0 0 0-2.75-2.75h-5Zm-1.25 2.75c0-.69.56-1.25 1.25-1.25h5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-5c-.69 0-1.25-.56-1.25-1.25v-8.5Z"
      />
    </Svg>
  );
};

export default MobileIcon;
