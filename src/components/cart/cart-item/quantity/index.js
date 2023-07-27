import Styles from "./Quantity.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Quantity({ setCount, count }) {
  return (
    <div className={Styles.quantity}>
      <button
        type="button"
        className={Styles.btn}
        onClick={() => setCount(count - 1)}
      >
        <Image src="/minus-icon.svg" width={16} height={16} alt="icon" />
      </button>

      <p>
        <span>{count} </span>x
      </p>

      <button
        type="button"
        className={Styles.btn}
        onClick={() => setCount(count + 1)}
      >
        <Image src="/plus-icon.svg" width={16} height={16} alt="icon" />
      </button>
    </div>
  );
}
