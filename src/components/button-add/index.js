import Image from "next/image";
import Link from "next/link";
import CalcFinalPrice from "@/utils";
import Styles from "./ButtonAdd.module.css";
import { useEffect } from "react";
import { useCartContext, cardActionType } from "../context/cartContext";

export default function ButtonAdd(props) {
  const context = useCartContext();
  const { id, imgsrc } = props;
  const { state, dispatch } = context;

  useEffect(() => {
    CalcFinalPrice;
  }, [state.cards]);

  const handleClick = (e) => {
    e.preventDefault();
    const item = state.cards.find((card) => {
      return card.id === id;
    });
    if (item === undefined) {
      dispatch({
        type: cardActionType.ADD_TO_CART,
        payload: { ...props, totalPrice: props.currPrice },
      });

      const finalPrice = state.cards.reduce((acc, curr) => {
        return acc + parseFloat(curr.totalPrice);
      }, 0);
      dispatch({ type: cardActionType.SET_TOTAL_PRICE, payload: finalPrice });
    }
  };
  const IconSize = 16;
  return (
    <Link className={Styles.button_add} href="#" onClick={handleClick}>
      <Image src={imgsrc} width={IconSize} height={IconSize} alt="plus" />
    </Link>
  );
}
