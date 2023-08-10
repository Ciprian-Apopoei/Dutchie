import Styles from "./SelectCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function SelectCard({ imgsrc, text }) {
  const IconSize = 32;
  return (
    <Link href="/checkout/Checkout-as-guest" className={Styles.link_wrapper}>
      <div className={Styles.select_card}>
        <div className={Styles.img_text}>
          <div className={Styles.wrapper_img}>
            <Image src={imgsrc} width={IconSize} height={IconSize} alt="icon" />
          </div>
          <p>{text}</p>
        </div>
        <input type="radio" />
      </div>
    </Link>
  );
}
