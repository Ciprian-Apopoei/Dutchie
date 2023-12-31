import Styles from "./BottomBtn.module.css";
import Button from "@/components/button";
import Link from "next/link";

export default function BottomBtn({ href }) {
  return (
    <div className={Styles.bottom_btn}>
      <div className="container">
        <Link href={href}>
          <Button
            className="btnLarge btnDark text_white"
            text="Proceed to checkout"
          />
        </Link>
      </div>
    </div>
  );
}
