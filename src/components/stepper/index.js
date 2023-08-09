import Styles from "./Stepper.module.css";
import Link from "next/link";

export default function Stepper({ active }) {
  return (
    <div className={Styles.stepper}>
      <div
        className={`${Styles.stepper_item} ${
          active === 1 ? ` ${Styles.stepper_active}` : ""
        }`}
      >
        <span>1</span>
        <Link href="/checkout/Sign-in">Personal Details</Link>
      </div>
      <span className={Styles.divider}></span>
      <div
        className={`${Styles.stepper_item} ${
          active === 2 ? ` ${Styles.stepper_active}` : ""
        }`}
      >
        <span>2</span>
        <Link href="/checkout/Delivery-method">Delivery Details</Link>
      </div>
      <span className={Styles.divider}></span>
      <div
        className={`${Styles.stepper_item} ${
          active === 3 ? ` ${Styles.stepper_active}` : ""
        }`}
      >
        <span>3</span>
        <Link href="/checkout/Payment-method">Payment</Link>
      </div>
    </div>
  );
}
