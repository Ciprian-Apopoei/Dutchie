import Title from "../title";
import Styles from "./HeroHeader.module.css";
import HeroImage from "./hero-image";
import Button from "../button";
import GridHalf from "./gridHalf";

export default function HeroHeader() {
  return (
    <section className={Styles.hero_header}>
      <div className="container">
        <GridHalf>
          <div className={Styles.left_side}>
            <Title level="h1">
              Your <span className={Styles.strong}>dutch store,</span> always
              close.
            </Title>
            <p className={Styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button
              className="btnLarge btnDark text_white"
              text="Check out the deals"
              imgsrc="/percent.svg"
              imgposition="left"
            />
          </div>
          <div className={Styles.right_side}>
            <HeroImage img="/hero.png" />
          </div>
        </GridHalf>
      </div>
    </section>
  );
}
