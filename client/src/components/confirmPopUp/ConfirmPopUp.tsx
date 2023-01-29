import * as styles from "./confirmPopUp.style";
import * as GlobalElementStyles from "../../styles/globalElements";
interface Props {
  text?: string;
  yesBtn: string;
  noBtn: string;
  yesFn: () => void;
  noFn: () => void;
}

const DesicionCheckPopUp = ({ text, yesBtn, noBtn, yesFn, noFn }: Props) => {
  return (
    <styles.PopUpContainer>
      <styles.Text>{text?.toLocaleUpperCase()}</styles.Text>
      <styles.BtnContainer>
        <GlobalElementStyles.MainBtn onClick={() => yesFn()}>
          {yesBtn}
        </GlobalElementStyles.MainBtn>
        <GlobalElementStyles.MainBtn onClick={() => noFn()}>
          {noBtn}
        </GlobalElementStyles.MainBtn>
      </styles.BtnContainer>
    </styles.PopUpContainer>
  );
};

export default DesicionCheckPopUp;
