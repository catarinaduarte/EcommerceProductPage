import Minus from "./IncDecOperators/Minus";
import Plus from "./IncDecOperators/Plus";
import styles from "./IncDecInput.module.css";
import Context from "../../store/context";
import { useContext } from "react";
const IncDecInput = () => {
  const ctx = useContext(Context);
  return (
    <div className={styles.input}>
      <Minus onClick={ctx.decQuantity} />
      <span>{ctx.quantity}</span>
      <Plus onClick={ctx.incQuantity} />
    </div>
  );
};

export default IncDecInput;
