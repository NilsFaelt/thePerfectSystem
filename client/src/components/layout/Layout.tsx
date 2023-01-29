import * as styles from "./layout.style";
import Header from "../header/Header";
interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <styles.LayoutContiner>
      <Header />
      {children}
    </styles.LayoutContiner>
  );
};

export default Layout;
