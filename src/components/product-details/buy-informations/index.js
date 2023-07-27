import Styles from "./BuyInformations.module.css";
import Title from "../../title";
import Statement from "./statement";
import Button from "@/components/button";

export default function BuyInformations() {
  return (
    <div className={Styles.buy_informations}>
      <p className={Styles.new_tag}>NEW</p>
      <Title level="h1">Product Title</Title>
      <p className={Styles.info}>250 g • Regular price per kilogram $39.90</p>
      <Statement text="Free delivery on orders more than" price="$39.90" />
      <Statement text="Arrives Wednesday, 1st of July" />
      <p className={Styles.price}>
        {" "}
        <span className={Styles.currency}>$</span>18.<sup>90</sup>
      </p>
      <Button
        className="btnRegular btnDark text_white"
        text="Add to cart"
        imgsrc="/plus-w-card.svg"
        imgposition="left"
      />
    </div>
  );
}
