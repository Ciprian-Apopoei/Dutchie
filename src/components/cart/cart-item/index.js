import Styles from "./CartItem.module.css";
import Title from "@/components/title";
import Quantity from "./quantity";
import { useState, useEffect } from "react";
import {
  useCartContext,
  cardActionType,
} from "@/components/context/cartContext";
import ButtonDelete from "@/components/button-delete";

export default function CartItem(props) {
  const { id, img, title, currPrice } = props;

  const [total, setTotal] = useState(currPrice);
  const { state, dispatch } = useCartContext();
  const totalCount = state.totalCount;
  const [count, setCount] = useState(totalCount);

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
    <div className={Styles.cart_item}>
      <div className={Styles.left}>
        <div className={Styles.image}>
          <img src={img} width={30} height={30} alt="icon" />
        </div>
        <div className={Styles.wrapper_title_quantity}>
          <Title level="h6">
            {title}
            {id}
          </Title>
          <Quantity setCount={setCount} count={count} />
        </div>
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
