import Styles from "./CategoryLarge.module.css";
import Button from "@/components/button";

export default function CategoryLarge({ details }) {
  return (
    <div className={Styles.category_large}>
      <p>{details}</p>
      <Button
        className="btnLink btnTransparent text_white"
        text="from 8.90€"
        imgsrc="/arrow-r-w.svg"
        imgposition="right"
      />
    </div>
  );
}
