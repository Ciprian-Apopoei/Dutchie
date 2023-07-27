import Styles from "./Offers.module.css";
import GridHalf from "../hero-header/gridHalf";
import Title from "../title";
import Button from "../button";
import Basket from "./basket";

export default function Offers() {
  return (
    <section className={Styles.offers}>
      <div className="container">
        <GridHalf>
          <div className={Styles.left_side}>
            <Title level="h2">YAAY! KING'S DAY!</Title>
            <span className={Styles.reminder}>
              ⏰ This offer valid only untill 1st of May
            </span>
            <Title level="h5">
              Grab a <span className={Styles.strong}>treat basket</span> for a
              special occasion{" "}
            </Title>

            <p className={Styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus,
              vitae ante risus quis cursus aliquam consectetur.
            </p>
            <Button
              className="btnLarge btnDark text_white"
              text="More for less — check it out"
            />
          </div>
          <div className={Styles.right_side}>
            <div className={Styles.wrapper_basket}>
              <Basket src="/basket-img-b.svg" text="Party Must-Haves" />
              <Basket src="/basket-img-w.svg" text="For king and his queen" />
              <Basket src="/basket-img-b.svg" text="King's decorations" />
              <Basket src="/basket-img-w.svg" text="King's day with Family" />
            </div>
          </div>
        </GridHalf>
      </div>
    </section>
  );
}
