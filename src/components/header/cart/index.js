import Image from "next/image";
import Styles from "./Cart.module.css";
import Link from "next/link";

export default function Cart({ price }) {
  const IconSize = 16;
  return (
    <Link className={Styles.cart} href="/cart">
      <Image
        src="/cart.svg"
        width={IconSize}
        height={IconSize}
        alt="Picture of the author"
      />
      <span className={Styles.price}>{price}</span>
    </Link>
  );
}
