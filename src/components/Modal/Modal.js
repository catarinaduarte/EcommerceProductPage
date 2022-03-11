import Thumbnail from "../Product/Thumbnail";
import MainImage from "../Product/MainImage";
import styles from "./Modal.module.css";
import Backdrop from "./Backdrop";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import Cross from "./Cross";
import Context from "../../store/context";
import { useContext } from "react";

const Modal = () => {
  const ctx = useContext(Context);

  return (
    <Backdrop>
      <div className={styles.modal}>
        <MainImage />
        <div>
          <Thumbnail
            id="0"
            img={require("../../assets/images/image-product-1-thumbnail.jpg")}
            onClick={ctx.photoHandler}
          />
          <Thumbnail
            id="1"
            img={require("../../assets/images/image-product-2-thumbnail.jpg")}
            onClick={ctx.photoHandler}
          />
          <Thumbnail
            id="2"
            img={require("../../assets/images/image-product-3-thumbnail.jpg")}
            onClick={ctx.photoHandler}
          />
          <Thumbnail
            id="3"
            img={require("../../assets/images/image-product-4-thumbnail.jpg")}
            onClick={ctx.photoHandler}
          />
        </div>
        <LeftArrow />
        <RightArrow />
        <Cross />
      </div>
    </Backdrop>
  );
};

export default Modal;
