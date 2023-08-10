import Styles from "./Stepper.module.css";
import Step from "./step";

export default function Stepper({ active }) {
  return (
    <div className={Styles.stepper}>
      <Step
        number="1"
        linkUrl="/checkout/Sign-in"
        linkText="Personal Details"
        className={`${Styles.stepper_item} ${
          active === 1 ? ` ${Styles.stepper_active}` : ""
        }`}
      />

      <span className={Styles.divider}></span>
      <Step
        number="2"
        linkUrl="/checkout/Delivery-method"
        linkText="Delivery Details"
        className={`${Styles.stepper_item} ${
          active === 2 ? ` ${Styles.stepper_active}` : ""
        }`}
      />

      <span className={Styles.divider}></span>
      <Step
        number="3"
        linkUrl="/checkout/Payment-method"
        linkText="Payment"
        className={`${Styles.stepper_item} ${
          active === 3 ? ` ${Styles.stepper_active}` : ""
        }`}
      />
    </div>
  );
}
