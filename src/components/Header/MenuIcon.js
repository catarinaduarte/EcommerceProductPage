import styles from "./MenuIcon.module.css";
import { useContext } from "react";
import Context from "../../store/context";

const MenuIcon = () => {
  const ctx = useContext(Context);
  return (
    <svg
      className={styles.menu}
      width="16"
      height="15"
      xmlns="http://www.w3.org/2000/svg"
      onClick={ctx.setMenu}
    >
      <path
        d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
        fill="#69707D"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default MenuIcon;
