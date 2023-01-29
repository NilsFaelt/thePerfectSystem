import BurgerMenu from "../../ui/burgerMenu/BurgerMenu";
import * as styles from "./header.style";

const Header = () => {
  return (
    <styles.Header>
      <styles.Title>
        Clerp <span>Systems</span>
      </styles.Title>
      <BurgerMenu />
    </styles.Header>
  );
};

export default Header;
