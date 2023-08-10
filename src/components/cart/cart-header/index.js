import Styles from "./CartHeader.module.css";
import Image from "next/image";
import Title from "@/components/title";
import Button from "@/components/button";
import Link from "next/link";

export default function CartHeader() {
  const IconSize = 24;
  return (
    <div className={Styles.cart_header}>
      <div className={Styles.title}>
        <Image
          src="/shopping-cart.svg"
          width={IconSize}
          height={IconSize}
          alt="img"
        />
        <Title level="h5">Items in your cart</Title>
      </div>
      <Link href="/checkout/Sign-in">
        <Button
          className="btnLarge btnDark text_white"
          text="Proceed to checkout"
        />
      </Link>
    </div>
  );
}
