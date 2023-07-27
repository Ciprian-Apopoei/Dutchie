import Styles from "./CartHeader.module.css";
import Image from "next/image";
import Title from "@/components/title";
import Button from "@/components/button";
import Link from "next/link";

export default function CartHeader() {
  return (
    <div className={Styles.cart_header}>
      <div className={Styles.title}>
        <Image src="/shopping-cart.svg" width={24} height={24} alt="img" />
        <Title level="h5">Items in your cart</Title>
      </div>
      <Link href="/checkout">
        <Button
          className="btnLarge btnDark text_white"
          text="Proceed to checkout"
        />
      </Link>
    </div>
  );
}
