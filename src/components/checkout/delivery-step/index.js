import CartSmall from "../cart-small";
import Styles from "./DeliveryStep.module.css";
import DeliveryForm from "./delivery-form";

export default function DeliveryStep() {
  return (
    <section className={Styles.checkout}>
      <div className="container_regular">
        <div className={Styles.container_inner}>
          <DeliveryForm />
          <CartSmall />
        </div>
      </div>
    </section>
  );
}
