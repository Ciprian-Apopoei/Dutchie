import Image from "next/image";
import Link from "next/link";
import Styles from "./ButtonAdd.module.css";

import { useCartContext, cardActionType } from "../context/cartContext";

export default function ButtonAdd(props) {
  const context = useCartContext();
  const { id, imgsrc } = props;
  const { state, dispatch } = context;

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
    }
  };

  return (
    <Link className={Styles.button_add} href="#" onClick={handleClick}>
      <Image src={imgsrc} width={16} height={16} alt="plus" />
    </Link>
  );
}
