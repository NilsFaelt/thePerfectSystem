import * as styles from "./login.style";
import * as GlobalElemntstyles from "../../styles/globalElements";
import { useState } from "react";
import { GetLoginInfoOnChange } from "./utils/getloginCredentials";
import { ILogin } from "../../types/loginTypes";

const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState<ILogin>({
    username: "",
    password: "",
  });

  return (
    <styles.LoginContainer>
      <GlobalElemntstyles.SecondaryTitle>
        Login
      </GlobalElemntstyles.SecondaryTitle>
      <styles.InputField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          GetLoginInfoOnChange(e, setLoginCredentials)
        }
        required
        name='username'
        placeholder='Username'
      />
      <styles.InputField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          GetLoginInfoOnChange(e, setLoginCredentials)
        }
        required
        type='password'
        name='password'
        placeholder='Password'
      />
      <GlobalElemntstyles.MainBtn>LOGIN</GlobalElemntstyles.MainBtn>
    </styles.LoginContainer>
  );
};

export default Login;
