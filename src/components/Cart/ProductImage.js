import styles from "./ProductImage.module.css";

const ProductImage = () => {
  return (
    <img
      className={styles.img}
      src={require("../../assets/images/image-product-1-thumbnail.jpg")}
      alt="productImage"
    ></img>
  );
};

export default ProductImage;
