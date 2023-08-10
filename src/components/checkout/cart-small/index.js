import Styles from "./CartSmall.module.css";
import Title from "@/components/title";
import Image from "next/image";
import ItemSmall from "./item-small";
import CalcFinalPrice from "@/utils";
import {
  useCartContext,
  cardActionType,
} from "@/components/context/cartContext";
import { useEffect } from "react";

export default function CartSmall() {
  const { state, dispatch } = useCartContext();
  const { cards } = state;

  useEffect(() => {
    CalcFinalPrice;
  }, [state.cards]);

  let allTotal = (Number(state.totalPrice.toFixed(2)) + 4.9).toFixed(2);
  const IconSize = 24;
  return (
    <div className={Styles.cart_small}>
      <div className={Styles.cart_small_header}>
        <Image
          src="/shopping-cart.svg"
          width={IconSize}
          height={IconSize}
          alt="icon"
        />
        <Title level="h5">Your cart ({state.cards.length} items)</Title>
      </div>
      <div className={Styles.wrapper_cart_small}>
        <div className={Styles.wrapper_cart_items}>
          {cards.map((card) => {
            return <ItemSmall key={card.id} {...card} />;
          })}
        </div>
        <div className={Styles.modal_footer}>
          <div className={Styles.top}>
            <div className={Styles.subtotal}>
              <p className={Styles.subtotal_text}>Subtotal</p>
              <p className={Styles.subtotal_price}>
                <span>$</span> {state.totalPrice.toFixed(2)}
              </p>
            </div>
            <div className={Styles.shipping}>
              <p className={Styles.shipping_text}>Shipping</p>
              <p className={Styles.shipping_price}>
                <span>$</span> 4.90
              </p>
            </div>
          </div>
          <div className={Styles.bottom}>
            <p className={Styles.total_text}>Total</p>
            <p className={Styles.total_price}>
              <span>$</span> {allTotal}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
