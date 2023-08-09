import CartSmall from "../cart-small";
import Styles from "./SuccessPayment.module.css";
import SuccessPurchese from "./success-purchese";

export default function SuccessPayment() {
  return (
    <section className={Styles.checkout}>
      <div className="container_regular">
        <div className={Styles.container_inner}>
          <SuccessPurchese />
          <CartSmall />
        </div>
      </div>
    </section>
  );
}
