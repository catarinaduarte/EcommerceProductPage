import styles from "./Description.module.css";
import CartIcon from "./CartIcon";
import IncDecInput from "./IncDecInput";
import Context from "../../store/context";
import { useContext } from "react";

const Description = () => {
  const ctx = useContext(Context);
  return (
    <div className={styles.description}>
      <h3 className={styles["description-heading"]}>SNEAKER COMPANY</h3>
      <h1 className={styles["description-title"]}>
        Fall Limited Edition Sneakers
      </h1>

      <p>
        These low-profile sneakers are your perfect casual wear companion.{" "}
        <br></br> Featuring a durable rubber outer sole, they'll withstand
        everything the <br></br>
        wheather can offer.
      </p>
      <div className={styles.prices}>
        <div className={styles["prices-discount"]}>
          <h2>$125.00</h2>
          <span>50%</span>
        </div>
        <h3>$250.00</h3>
      </div>
      <h3 className={styles["og-price"]}>$250.00</h3>
      <div className={styles.buttons}>
        <IncDecInput />
        <button onClick={ctx.addToCart}>
          <CartIcon />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Description;
