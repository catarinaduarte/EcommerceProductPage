import styles from "./NavList.module.css";
import Context from "../../store/context";
import { useContext } from "react";

const NavList = () => {
  const ctx = useContext(Context);
  const navActive = ctx.menu ? styles.active : "";
  return (
    <ul className={`${styles.ul} ${navActive}`}>
      <li>Collections</li>
      <li>Men</li>
      <li>Women</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  );
};

export default NavList;
