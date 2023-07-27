import Styles from "./FiltersList.module.css";
import FilterSection from "./filter-section";

export default function FiltersList() {
  return (
    <div className={Styles.filters_list}>
      <FilterSection title="Title" />
      <FilterSection title="Title" />
      <FilterSection title="Title" />
      <FilterSection title="Title" />
      <FilterSection title="Title" />
    </div>
  );
}
