import {
  useCartContext,
  cardActionType,
} from "@/components/context/cartContext";

export default function CalcFinalPrice() {
  const { state, dispatch } = useCartContext();

  const finalPrice = state.cards.reduce((acc, curr) => {
    return acc + parseFloat(curr.totalPrice);
  }, 0);
  dispatch({ type: cardActionType.SET_TOTAL_PRICE, payload: finalPrice });
}
