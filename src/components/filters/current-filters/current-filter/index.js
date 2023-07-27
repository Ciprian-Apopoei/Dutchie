import Styles from "./CurrentFilter.module.css";
import Link from "next/link";
import Image from "next/image";

export default function CurrentFilter({ text }) {
  return (
    <Link className={Styles.current_filter} href="#">
      {text}
      <Image
        className={Styles.checked}
        src="/check-icon.svg"
        width={16}
        height={16}
        alt="img"
      />
      <Image
        className={Styles.delete}
        src="/delete-icon.svg"
        width={16}
        height={16}
        alt="img"
      />
    </Link>
  );
}
