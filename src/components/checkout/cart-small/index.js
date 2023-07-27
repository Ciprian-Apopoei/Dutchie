import Styles from "./CartSmall.module.css";
import Title from "@/components/title";
import Image from "next/image";
import ItemSmall from "./item-small";

export default function CartSmall() {
  return (
    <div className={Styles.cart_small}>
      <div className={Styles.cart_small_header}>
        <Image src="/shopping-cart.svg" width={24} height={24} alt="icon" />
        <Title level="h5">Your cart (4 items)</Title>
      </div>
      <div className={Styles.wrapper_cart_small}>
        <div className={Styles.wrapper_cart_items}>
          <ItemSmall />
          <ItemSmall />
          <ItemSmall />
          <ItemSmall />
        </div>
      </div>
    </div>
  );
}
