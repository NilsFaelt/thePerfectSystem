import styled from "styled-components";
import { theme } from "./theme";

export const SecondaryTitle = styled.h2`
  text-align: center;
  font-family: "Orbitron", sans-serif;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textColor};
`;
export const MainBtn = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textColor};
  min-height: 50px;
  min-width: 150px;
  cursor: pointer;
  &:hover {
    transition: 1s;
    background-color: ${({ theme }) => theme.colors.lightColor};
    color: ${({ theme }) => theme.colors.body};
  }
  &:active {
    transition: 0.5s;
    border-radius: 15px;
  }
`;
