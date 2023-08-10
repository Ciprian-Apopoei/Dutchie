import Image from "next/image";
import Styles from "./SingleIcon.module.css";

export default function SingleIcon({ address }) {
  const IconSize = 24;
  return (
    <a className={Styles.icon} href="#">
      <Image src={address} width={IconSize} height={IconSize} alt="icon" />
    </a>
  );
}
