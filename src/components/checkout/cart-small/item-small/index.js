import Styles from "./ItemSmall.module.css";
import Title from "@/components/title";
import Quantity from "@/components/cart/cart-item/quantity";
import ButtonDelete from "@/components/button-delete";
import { useState, useEffect } from "react";
import {
  useCartContext,
  cardActionType,
} from "@/components/context/cartContext";

export default function ItemSmall(props) {
  const { id, img, title, currPrice } = props;
  const { state, dispatch } = useCartContext();
  const totalCount = state.totalCount;
  const [count, setCount] = useState(totalCount);
  const [total, setTotal] = useState(currPrice);

  useEffect(() => {
    const finalTotal = parseFloat((count * parseFloat(currPrice)).toFixed(2));
    setTotal(finalTotal);

    const items = state.cards.map((card) => {
      return {
        ...card,
        totalPrice: id === card.id ? finalTotal : card.totalPrice,
      };
    });

    dispatch({ type: cardActionType.UPDATE_CARDS, payload: items });

    const finalPrice = state.cards.reduce((acc, curr) => {
      return acc + parseFloat(curr.totalPrice);
    }, 0);

    dispatch({ type: cardActionType.SET_TOTAL_PRICE, payload: finalPrice });

    const totalCount = count;

    dispatch({ type: cardActionType.SET_TOTAL_COUNT, payload: totalCount });
  }, [count]);

  return (
    <div className={Styles.item_small}>
      <div className={Styles.wrapper_title_quantity}>
        <Title level="h6">
          {title}
          {id}
        </Title>
        <Quantity setCount={setCount} count={count} />
      </div>

      <div className={Styles.wrapper_delete_price}>
        <ButtonDelete {...props} />
        <p className={Styles.price}>
          <span className={Styles.currency}>$ </span>
          {total}
        </p>
      </div>
    </div>
  );
}
