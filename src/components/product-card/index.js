import Styles from "./ProductCard.module.css";
import Link from "next/link";
import ButtonAdd from "../button-add";

export default function ProductCard(props) {
  const { id, img, discount, title, originalPrice, currPrice } = props;

  return (
    <div className={Styles.product_card}>
      <div className={Styles.card_top}>
        <img src={img} alt="img" />
        {discount ? <span className={Styles.discount}>{discount}</span> : ""}
      </div>

      <div className={Styles.card_body}>
        <Link className={Styles.card_title} href="/product-details">
          {title}
        </Link>
        <div className={Styles.card_bottom}>
          <p className={Styles.current_price}>
            <span className={Styles.original_price}>
              <s>{originalPrice}</s>
            </span>
            <span className={Styles.dollar}>$</span>
            <span>{currPrice}</span>
          </p>
          <ButtonAdd imgsrc="/plus-w.svg" {...props} />
        </div>
      </div>
    </div>
  );
}
