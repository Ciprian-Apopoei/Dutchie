import Styles from "./LinksList.module.css";
import Link from "next/link";

export default function LinksList({ title, category, item }) {
  return (
    <div className={Styles.list_box}>
      <h3 className={Styles.title}>{title}</h3>
      <h4 className={Styles.category}>{category}</h4>
      <ul className={Styles.list}>
        <li className={Styles.list_item}>
          <Link className={Styles.list_link} href="#">
            {item}
          </Link>
        </li>
        <li className={Styles.list_item}>
          <Link className={Styles.list_link} href="#">
            {item}
          </Link>
        </li>
        <li className={Styles.list_item}>
          <Link className={Styles.list_link} href="#">
            {item}
          </Link>
        </li>
      </ul>
    </div>
  );
}
