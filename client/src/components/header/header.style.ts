import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 10vh;
  background-color: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.textColor};
`;
export const Title = styled.h1`
  font-family: "Orbitron", sans-serif;
  cursor: pointer;
  display: inline-block;
  margin: 20px;
  &:hover {
    span {
      transition: 1s;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.textColor};
      text-shadow: 0px 0px 0px;
      color: gold;
    }
  }
  span {
    font-size: 0.5rem;
    color: ${({ theme }) => theme.colors.lightColor};
  }
`;
