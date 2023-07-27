import Link from "next/link";
import Styles from "./email.module.css";

export default function Email({ email }) {
  return (
    <Link className={Styles.email} href="mailto:info@dutchie.nl">
      {email}
    </Link>
  );
}
