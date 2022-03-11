import styles from "./MainImage.module.css";
import Context from "../../store/context";
import { useContext } from "react";

const MainImage = () => {
  const ctx = useContext(Context);
  return (
    <img
      className={styles["main-img"]}
      src={ctx.activeImg.img}
      alt="mainImg"
      onClick={ctx.openModal}
    ></img>
  );
};

export default MainImage;
