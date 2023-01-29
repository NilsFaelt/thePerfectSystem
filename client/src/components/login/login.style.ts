import styled from "styled-components";

export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  gap: 15px;
  top: 50%;
  left: 50%;
  padding: 10px 10px 30px 10px;
  transform: translate(-50%, -50%);
  width: clamp(250px, 40vw, 400px);
  height: auto;
  border: 1px solid ${({ theme }) => theme.colors.border};
  &:hover {
    box-shadow: 3px 3px 3px ${({ theme }) => theme.colors.border};
    transition: 1s;
  }
`;

export const InputField = styled.input`
  width: 90%;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.border};
  &::placeholder {
    font-family: "Orbitron", sans-serif;
  }
`;
