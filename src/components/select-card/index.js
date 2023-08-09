import Styles from "./SelectCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function SelectCard({ imgsrc, text }) {
  return (
    <Link href="/checkout/Checkout-as-guest" className={Styles.link_wrapper}>
      <div className={Styles.select_card}>
        <div className={Styles.img_text}>
          <div className={Styles.wrapper_img}>
            <Image src={imgsrc} width={32} height={32} alt="icon" />
          </div>
          <p>{text}</p>
        </div>
        <input type="radio" />
      </div>
    </Link>
  );
}
