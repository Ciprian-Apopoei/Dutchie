import FilterOption from "../filter-option";
import Styles from "./FilterSection.module.css";
import { useState } from "react";

export default function FilterSection({ title }) {
  const [isOpen, setisOpen] = useState(false);

  function handleClick() {
    setisOpen(!isOpen);
  }

  return (
    <div className={Styles.filter_section}>
      {isOpen}
      <button
        className={`${Styles.filter_button} ${
          isOpen ? "btn_open" : "btn_closed"
        }`}
        type="button"
        onClick={handleClick}
      >
        {title}
      </button>

      {isOpen === true && (
        <div className={Styles.wrapper_options}>
          <FilterOption text="🥖 Option (28)" />
          <FilterOption text="🥖 Option (21)" />
          <FilterOption text="🥖 Option (15)" />
          <FilterOption text="🥖 Option (10)" />
        </div>
      )}
    </div>
  );
}
