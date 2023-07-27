import Styles from "./OthersBought.module.css";
import Title from "@/components/title";
import ProductCardSmall from "./product-card-small";

export default function OthersBought() {
  return (
    <div className={Styles.others_bought}>
      <Title level="h6">Other’s also bought</Title>
      <div className={Styles.wrapper_cards}>
        <ProductCardSmall
          imgsrc="/bg-icon.svg"
          currency="$"
          integer="8"
          suptext="90"
        />
        <ProductCardSmall
          imgsrc="/bg-icon.svg"
          currency="$"
          integer="8"
          suptext="90"
        />
        <ProductCardSmall
          imgsrc="/bg-icon.svg"
          currency="$"
          integer="8"
          suptext="90"
        />
      </div>
    </div>
  );
}
