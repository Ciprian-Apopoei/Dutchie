import Styles from "./Search.module.css";

export default function Search() {
  return (
    <form className={Styles.form_search}>
      <input className={Styles.button} type="button" value="" />
      <input
        className={Styles.search}
        type="text"
        placeholder="Search for foods, products or other"
      />
    </form>
  );
}
