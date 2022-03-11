import styles from "./Product.module.css";
import ProductImage from "./ProductImage";
import DeleteIcon from "./DeleteIcon";
import Context from "../../store/context";
import { useContext } from "react";

const Product = (props) => {
  const ctx = useContext(Context);
  return (
    <>
      <ProductImage />
      <span>
        <p>Fall Limited Edition Sneakers</p>
        <p>
          <span>$</span>
          <span>{props.price}</span> x {ctx.newQuantity}{" "}
          <span className={styles["cart-product__price"]}>$</span>
          <span className={styles["cart-product__price"]}>
            {props.price * ctx.newQuantity}
          </span>
        </p>
      </span>
      <DeleteIcon />
    </>
  );
};

export default Product;
