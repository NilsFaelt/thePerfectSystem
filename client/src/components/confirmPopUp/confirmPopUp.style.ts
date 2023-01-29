import styled from "styled-components";

export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  gap: 15px;
  top: 50%;
  left: 50%;
  padding: 30px;
  transform: translate(-50%, -50%);
  min-width: 250px;
  min-height: 100px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  z-index: 5;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 10px;
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.lightColor};
`;
