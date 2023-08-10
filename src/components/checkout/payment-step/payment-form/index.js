import Styles from "./PaymentForm.module.css";
import Title from "@/components/title";
import Stepper from "@/components/stepper";
import IconTitle from "../../icon-title";
import ButtonBack from "@/components/button-back";
import SelectCard from "@/components/select-card";

export default function PaymentCardSelect() {
  return (
    <div className={Styles.payment_card_select}>
      <Title level="h5">Fill it in and you're good to go!</Title>
      <div className={Styles.wrapper_payment_card_select}>
        <Stepper active={3} />
        <div className={Styles.wrapper_content}>
          <ButtonBack
            text="Back to delivery method"
            href="/checkout/Delivery-method"
          />
          <span className={Styles.divider}></span>
          <div className={Styles.wrapper_title}>
            <IconTitle imgsrc="./../card.svg" title="Payment method" />
            <span>1/2</span>
          </div>

          <SelectCard imgsrc="../card.svg" text="Card" />
          <SelectCard imgsrc="../paypal.svg" text="PayPal" />
          <SelectCard imgsrc="../apple.svg" text="Apple Pay" />
          <SelectCard imgsrc="../google-icon.svg" text="Google Pay" />

          <div className={Styles.accepted_cards}>
            <p>We accept these cards:</p>
            <div className={Styles.wrapper_logos}>
              <span className={Styles.logo}></span>
              <span className={Styles.logo}></span>
              <span className={Styles.logo}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
