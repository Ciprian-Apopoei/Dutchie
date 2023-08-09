import Styles from "./CartWrapper.module.css";
import CartHeader from "../cart-header";
import CartSubtotal from "../cart-subtotal";
import CartItem from "../cart-item";
import {
  useCartContext,
  cardActionType,
} from "@/components/context/cartContext";
import { useEffect } from "react";

export default function CartWrapper() {
  const { state, dispatch } = useCartContext();
  const { cards } = state;

  useEffect(() => {
    const finalPrice = state.cards.reduce((acc, curr) => {
      return acc + parseFloat(curr.totalPrice);
    }, 0);

    dispatch({ type: cardActionType.SET_TOTAL_PRICE, payload: finalPrice });
  }, [state.cards]);

  return (
    <section className={Styles.cart_wrapper}>
      <div className="container_small">
        <CartHeader />
        <div className={Styles.cart_box}>
          <CartSubtotal subtotal={state.totalPrice.toFixed(2)} />
          <div className={Styles.cart_items}>
            {cards.map((card) => {
              return <CartItem key={card.id} {...card} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
