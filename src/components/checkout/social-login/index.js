import Styles from "./SocialLogin.module.css";
import Link from "next/link";
import Image from "next/image";

export default function SocialLogin({ imgsrc, text, href }) {
  const IconSize = 22;
  return (
    <Link className={Styles.social_btn} href={href}>
      <Image src={imgsrc} width={IconSize} height={IconSize} alt="icon" />
      {text}
    </Link>
  );
}
