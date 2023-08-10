import Image from "next/image";
import Styles from "./user.module.css";
import Link from "next/link";

export default function User() {
  const IconSize = 16;
  return (
    <Link className={Styles.user} href="/checkout/Sign-in">
      <Image src="/user.svg" width={IconSize} height={IconSize} alt="user" />
    </Link>
  );
}
