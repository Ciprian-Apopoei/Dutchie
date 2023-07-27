import Image from "next/image";
import Styles from "./Cart.module.css";
import Link from "next/link";

export default function Cart({ price }) {
  return (
    <Link className={Styles.cart} href="/cart">
      <Image
        src="/cart.svg"
        width={16}
        height={16}
        alt="Picture of the author"
      />
      <span className={Styles.price}>{price}</span>
    </Link>
  );
}
