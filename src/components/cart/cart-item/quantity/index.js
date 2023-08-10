import Styles from "./Quantity.module.css";
import Image from "next/image";

export default function Quantity({ setCount, count }) {
  const IconSize = 16;
  return (
    <div className={Styles.quantity}>
      <button
        type="button"
        className={Styles.btn}
        onClick={() => {
          count > 0 ? setCount(count - 1) : setCount(0);
        }}
      >
        <Image
          src="/minus-icon.svg"
          width={IconSize}
          height={IconSize}
          alt="icon"
        />
      </button>

      <p>
        <span>{count} </span>x
      </p>

      <button
        type="button"
        className={Styles.btn}
        onClick={() => setCount(count + 1)}
      >
        <Image
          src="/plus-icon.svg"
          width={IconSize}
          height={IconSize}
          alt="icon"
        />
      </button>
    </div>
  );
}
