import Context from "../../store/context";
import { useContext } from "react";
import styles from "./QuantityCounter.module.css";

const QuantityCounter = () => {
  const ctx = useContext(Context);
  return <div className={styles.counter}>{ctx.newQuantity}</div>;
};

export default QuantityCounter;
