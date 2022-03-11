import styles from "./Cart.module.css";
import Product from "./Product";
import { useContext } from "react";
import Context from "../../store/context";

const Cart = (props) => {
  const ctx = useContext(Context);
  return (
    <div className={styles.cart}>
      <header className={styles["cart-header"]}>
        <h3>Cart</h3>
      </header>
      <div className={styles["cart-product"]}>
        {ctx.toCart && <Product price="125.00" />}
        {!ctx.toCart && <p className={styles.empty}>Your cart is empty.</p>}
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
