import Image from "next/image";
import Styles from "./user.module.css";

export default function User() {
  return (
    <a className={Styles.user} href="#">
      <Image src="/user.svg" width={16} height={16} alt="user" />
    </a>
  );
}
