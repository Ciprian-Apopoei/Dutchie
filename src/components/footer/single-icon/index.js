import Image from "next/image";
import Styles from "./SingleIcon.module.css";

export default function SingleIcon({ address }) {
  return (
    <a className={Styles.icon} href="#">
      <Image src={address} width={24} height={24} alt="icon" />
    </a>
  );
}
