import { useState } from "react";
import * as styles from "./burgerMenu.style";

const BurgerMenu = () => {
  const [toogleBurgerAnimation, setToogleBurgerAnimation] = useState(false);
  return (
    <styles.BurgerContainer
      onClick={() => setToogleBurgerAnimation(!toogleBurgerAnimation)}
    >
      <styles.BurgerLayerOne
        animationProp={toogleBurgerAnimation ? "spinOpen" : "spinClose"}
      ></styles.BurgerLayerOne>
      <styles.BurgerLayerTwo
        animationProp={toogleBurgerAnimation ? "spinOpen" : "spinClose"}
      ></styles.BurgerLayerTwo>
      <styles.BurgerLayerThree
        animationProp={toogleBurgerAnimation ? "spinOpen" : "spinClose"}
      ></styles.BurgerLayerThree>
    </styles.BurgerContainer>
  );
};

export default BurgerMenu;
