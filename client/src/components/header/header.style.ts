import styled from "styled-components";

export const Header = styled.header`
  width: 100vw;
  height: 10vh;
  position: absolute;
  top: 0px;
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
    text-shadow: 2px 2px 2px ${({ theme }) => theme.colors.textColor};
    color: ${({ theme }) => theme.colors.darkColor};
    span {
      transition: 1s;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.textColor};
      text-shadow: 0px 0px 0px;

      &:hover {
        color: gold;
      }
    }
  }
  span {
    font-size: 0.5rem;
    color: gold;
  }
`;
