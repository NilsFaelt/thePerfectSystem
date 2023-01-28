import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.textColor};
`;
export const Title = styled.h1`
  font-family: "Orbitron", sans-serif;
  cursor: pointer;
  display: inline-block;
  margin: 20px;

  &:hover {
    transition: 1s;
    text-shadow: 2px 2px 2px white;
    color: black;
  }
`;
