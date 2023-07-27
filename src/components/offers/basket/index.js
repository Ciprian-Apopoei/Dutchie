import Styles from "./Basket.module.css";
import Image from "next/image";
import ButtonAdd from "@/components/button-add";

export default function Basket({ src, text }) {
  return (
    <div className={Styles.basket}>
      <div className={Styles.wrapper_top}>
        <Image src={src} width={230} height={132} />
        <ButtonAdd imgsrc="/plus-b.svg" />
      </div>
      <div className={Styles.wrapper_bottom}>
        <p>{text}</p>
        <span className={Styles.divider}>|</span>
        <p className={Styles.price}>
          {" "}
          <span className={Styles.currency}>$</span> 8.<sup>90</sup>
        </p>
      </div>
    </div>
  );
}
