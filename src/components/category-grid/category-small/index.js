import Styles from "./CategorySmall.module.css";
import Button from "@/components/button";

export default function CategorySmall({ details, btnStyle }) {
  return (
    <div className={Styles.category_small}>
      <p>{details}</p>
      {btnStyle === "btnDark" ? (
        <Button
          className="btnRegular btnDark text_white"
          text="Check it out"
          imgsrc="/arrow-r-w.svg"
          imgposition="right"
        />
      ) : (
        <Button
          className="btnLink text_black"
          text="from 8.90€"
          imgsrc="/arrow-r-b.svg"
          imgposition="right"
        />
      )}
    </div>
  );
}
