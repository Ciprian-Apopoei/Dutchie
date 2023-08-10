import Styles from "./ProductCardSmall.module.css";
import Image from "next/image";
import ButtonAdd from "@/components/button-add";

export default function ProductCardSmall({
  imgsrc,
  currency,
  integer,
  suptext,
}) {
  const IconSize = 56;
  return (
    <div className={Styles.product_card_small}>
      <Image src={imgsrc} width={IconSize} height={IconSize} alt="img" />
      <div className={Styles.bottom_card}>
        <p className={Styles.price}>
          <span className={Styles.currency}>{currency}</span>
          {integer}.<sup>{suptext}</sup>
        </p>
        <ButtonAdd imgsrc="/plus-w.svg" />
      </div>
    </div>
  );
}
