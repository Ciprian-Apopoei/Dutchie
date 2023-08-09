import Styles from "./ButtonBack.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ButtonBack({ text, href }) {
  return (
    <Link href={href} className={Styles.button_back}>
      <Image src="/arrow-goto.svg" width={16} height={16} alt="icon" />
      {text}
    </Link>
  );
}
