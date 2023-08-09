import CartSmall from "../cart-small";
import Styles from "./PaymentStep.module.css";
import PaymentForm from "./payment-form";

export default function PaymentStep() {
  return (
    <section className={Styles.checkout}>
      <div className="container_regular">
        <div className={Styles.container_inner}>
          <PaymentForm />
          <CartSmall />
        </div>
      </div>
    </section>
  );
}
