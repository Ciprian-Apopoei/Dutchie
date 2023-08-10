import DropdownList from "../dropdown-list";
import Styles from "./Dropdown.module.css";

export default function Dropdown({ dropDownObject, classMenu, show }) {
  return (
    <div
      className={` ${Styles.wrapper_dropdown} ${show ? `${Styles.show}` : ""}`}
    >
      <div className="container">
        <div className={`${classMenu} ${Styles.container_inner}`}>
          {dropDownObject &&
            dropDownObject.map((listItem) => (
              <DropdownList title="Sweets" item="Candy" />
            ))}
        </div>
      </div>
    </div>
  );
}
