import styles from "./LeftArrow.module.css";
import Context from "../../store/context";
import { useContext } from "react";
const LeftArrow = () => {
  const ctx = useContext(Context);
  return (
    <div onClick={ctx.prevPhoto} className={styles.arrow}>
      <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 1 3 9l8 8"
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default LeftArrow;
