import { ILogin } from "../../../types/loginTypes";

export const GetLoginInfoOnChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setLoginCredentials: React.Dispatch<React.SetStateAction<ILogin>>
) => {
  setLoginCredentials((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};
