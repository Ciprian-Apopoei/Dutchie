import Styles from "./FiltersApplied.module.css";
import CurrentFilters from "../current-filters";
import SortBy from "../sort-by";
import ProductDisplay from "../product-display";

export default function FilterApplied() {
  return (
    <div className={Styles.filter_applied}>
      <div className={Styles.wrapper_top}>
        <CurrentFilters />
        <SortBy />
      </div>
      <ProductDisplay />
    </div>
  );
}
