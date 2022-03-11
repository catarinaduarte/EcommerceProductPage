import styles from "./Images.module.css";
import MainImage from "./MainImage";
import Thumbnail from "./Thumbnail";
import Context from "../../store/context";
import { useContext } from "react";

const Images = () => {
  const ctx = useContext(Context);

  return (
    <div className={styles.images}>
      <MainImage />
      <div className={styles["images__thumbnails"]}>
        <Thumbnail
          id="0"
          img={require("../../assets/images/image-product-1-thumbnail.jpg")}
          onClick={ctx.photoHandler}
          active={ctx.activeImgStyle === "first-photo" ? styles.active : ""}
        />

        <Thumbnail
          id="1"
          img={require("../../assets/images/image-product-2-thumbnail.jpg")}
          onClick={ctx.photoHandler}
          active={ctx.activeImgStyle === "second-photo" ? styles.active : ""}
        />

        <Thumbnail
          id="2"
          img={require("../../assets/images/image-product-3-thumbnail.jpg")}
          onClick={ctx.photoHandler}
          active={ctx.activeImgStyle === "third-photo" ? styles.active : ""}
        />

        <Thumbnail
          id="3"
          img={require("../../assets/images/image-product-4-thumbnail.jpg")}
          onClick={ctx.photoHandler}
          active={ctx.activeImgStyle === "fourth-photo" ? styles.active : ""}
        />
      </div>
    </div>
  );
};

export default Images;
