import Styles from "./ButtonBack.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ButtonBack({ text, href }) {
  const IconSize = 16;
  return (
    <Link href={href} className={Styles.button_back}>
      <Image
        src="/arrow-goto.svg"
        width={IconSize}
        height={IconSize}
        alt="icon"
      />
      {text}
    </Link>
  );
}
