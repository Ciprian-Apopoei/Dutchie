import Styles from "./SocialLogin.module.css";
import Link from "next/link";
import Image from "next/image";

export default function SocialLogin({ imgsrc, text, href }) {
  return (
    <Link className={Styles.social_btn} href={href}>
      <Image src={imgsrc} width={22} height={22} alt="icon" />
      {text}
    </Link>
  );
}
