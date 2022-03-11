import NavList from "./NavList";
import CartIcon from "./CartIcon";
import ProfileIcon from "./ProfileIcon";
import styles from "./Header.module.css";
import Cart from "../Cart/Cart";
import { useContext } from "react";
import Context from "../../store/context";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";
import MenuCross from "./MenuCross";

const Header = () => {
  const ctx = useContext(Context);

  return (
    <header className={styles.header}>
      <div className={styles["header-nav"]}>
        {!ctx.menu && <MenuIcon />}
        {ctx.menu && <MenuCross />}
        <Logo />
        <NavList />
      </div>
      <div className={styles["header-icons"]}>
        <div className={styles["header-icons__cart"]}>
          <CartIcon />
          {ctx.cart && <Cart />}
        </div>
        <ProfileIcon />
      </div>
    </header>
  );
};

export default Header;
