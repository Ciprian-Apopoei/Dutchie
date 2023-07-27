import Styles from "./DropdownList.module.css";
import Link from "next/link";

export default function DropdownList({ title, item }) {
  return (
    <div className={Styles.list_box}>
      <h3 className={Styles.title}>{title}</h3>
      <hr className={Styles.divider}></hr>
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
