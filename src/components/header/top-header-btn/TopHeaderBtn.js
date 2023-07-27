import Link from "next/link";
import Styles from "./TopHeaderBtn.module.css";

export default function TopHeaderBtn({ text }) {
  return (
    <Link className={Styles.button} href="#">
      {text}
    </Link>
  );
}
