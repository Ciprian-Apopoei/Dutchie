import Styles from "./CartSubtotal.module.css";
import Title from "@/components/title";

export default function CartSubtotal({ subtotal }) {
  return (
    <div className={Styles.cart_subtotal}>
      <Title level="h5">Cart Subtotal</Title>
      <p className={Styles.price}>
        <span className={Styles.currency}>$ </span>
        {subtotal}
      </p>
    </div>
  );
}
