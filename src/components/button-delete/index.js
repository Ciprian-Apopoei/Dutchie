import Styles from "./ButtonDelete.module.css";
import Image from "next/image";
import CalcFinalPrice from "@/utils";
import {
  useCartContext,
  cardActionType,
} from "@/components/context/cartContext";
import { useEffect } from "react";

export default function ButtonDelete({ id }) {
  const { state, dispatch } = useCartContext();

  useEffect(() => {
    CalcFinalPrice;
  }, [state.cards]);

  const handleDelete = (id) => {
    return () => {
      const items = state.cards.filter((card) => {
        return card.id !== id;
      });
      dispatch({ type: cardActionType.UPDATE_CARDS, payload: items });
    };
  };

  const IconSize = 24;
  return (
    <button
      type="button"
      className={Styles.btn_delete}
      onClick={handleDelete(id)}
    >
      <Image
        src="/delete-product.svg"
        width={IconSize}
        height={IconSize}
        alt="icon"
      />
    </button>
  );
}
