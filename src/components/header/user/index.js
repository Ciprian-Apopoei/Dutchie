import Image from "next/image";
import Styles from "./user.module.css";
import Link from "next/link";

export default function User() {
  return (
    <Link className={Styles.user} href="/checkout/Sign-in">
      <Image src="/user.svg" width={16} height={16} alt="user" />
    </Link>
  );
}
