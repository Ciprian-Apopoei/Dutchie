import Link from "next/link";
import Styles from "./SortBy.module.css";

export default function SortBy() {
  return (
    <div className={Styles.wrapper_sort_by}>
      <details className={Styles.sort_by}>
        <summary>Sort by</summary>
        <div className={Styles.wrapper_links}>
          <Link href="#">A - Z</Link>
          <Link href="#">Z - A</Link>
          <Link href="#">Name</Link>
          <Link href="#">Date</Link>
        </div>
      </details>
    </div>
  );
}
