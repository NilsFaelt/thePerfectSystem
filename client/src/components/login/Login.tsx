import * as styles from "./login.style";
import * as GlobalElemntstyles from "../../styles/globalElements";

const Login = () => {
  return (
    <styles.LoginContainer>
      <GlobalElemntstyles.SecondaryTitle>
        Login
      </GlobalElemntstyles.SecondaryTitle>
      <styles.InputField placeholder='Username' />
      <styles.InputField placeholder='Password' />
      <GlobalElemntstyles.MainBtn>LOGIN</GlobalElemntstyles.MainBtn>
    </styles.LoginContainer>
  );
};

export default Login;
