import Logo from "../logo";
import NavLink from "../nav-link";
import Search from "../search";
import User from "../user";
import Cart from "../cart";
import Styles from "./MainHeader.module.css";
import NavLinks from "../nav-links";
import { useCartContext } from "@/components/context/cartContext";

export default function MainHeader() {
  const { state } = useCartContext();
  return (
    <div className={Styles.wrapper_mainheader}>
      <div className="container">
        <div className={Styles.container_inner}>
          <Logo logo="./logo.svg" />
          <NavLinks />
          <Search />
          <User />
          <Cart price={state.totalPrice.toFixed(2)} />
        </div>
      </div>
    </div>
  );
}
