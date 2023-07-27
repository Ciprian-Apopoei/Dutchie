import Styles from "./Stepper.module.css";

export default function Stepper() {
  return (
    <div className={Styles.stepper}>
      <div className={`${Styles.stepper_item} ${Styles.stepper_active}`}>
        <span>1</span>
        <p>Personal Details</p>
      </div>
      <span className={Styles.divider}></span>
      <div className={Styles.stepper_item}>
        <span>2</span>
        <p>Delivery Details</p>
      </div>
      <span className={Styles.divider}></span>
      <div className={Styles.stepper_item}>
        <span>3</span>
        <p>Payment</p>
      </div>
    </div>
  );
}
