import styled from "styled-components";
interface Props {
  animationProp: string;
}
export const BurgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textColor};
`;
export const BurgerLayerOne = styled.div<Props>`
  width: 30px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.textColor};
  animation: forwards ${(props) => props.animationProp} 0.5s;
  animation-delay: 0.2s;
`;
export const BurgerLayerTwo = styled.div<Props>`
  width: 30px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.textColor};
  animation: forwards ${(props) => props.animationProp} 0.5s;
  animation-delay: 0.1s;
`;
export const BurgerLayerThree = styled.div<Props>`
  width: 30px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.textColor};
  animation: ${(props) => props.animationProp} forwards 0.5s;
  @keyframes spinOpen {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes spinClose {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
`;
