import Styles from "./ProductCharacteristics.module.css";
import Title from "@/components/title";

export default function ProductCharacteristics() {
  return (
    <div className={Styles.product_characteristics}>
      <Title level="h5">Characteristics</Title>
      <ul>
        <li>
          <input type="checkbox" /> Lorem ipsum dolor sit amet.
        </li>
        <li>
          <input type="checkbox" /> Lorem ipsum dolor sit amet.
        </li>
        <li>
          <input type="checkbox" /> Lorem ipsum dolor sit amet.
        </li>
      </ul>
    </div>
  );
}
