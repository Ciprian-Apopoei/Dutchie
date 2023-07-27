import Styles from "./CurrentFilters.module.css";
import CurrentFilter from "./current-filter";

export default function CurrentFilters() {
  return (
    <div className={Styles.currrent_filters}>
      <p className={Styles.subtitle}>Applied filters:</p>
      <div className={Styles.wrapper_filters}>
        <CurrentFilter text="🥖 Option 1" />
        <CurrentFilter text="🥖 Option 2" />
        <CurrentFilter text="🥖 Option 3" />
      </div>
    </div>
  );
}
