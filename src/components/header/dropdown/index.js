import DropdownList from "../dropdown-list";
import Styles from "./Dropdown.module.css";

export default function Dropdown({ dropDownObject, classMenu, show }) {
  return (
    <div
      className={
        show
          ? `${Styles.wrapper_dropdown} ${Styles.show}`
          : `${Styles.wrapper_dropdown}`
      }
    >
      <div className="container">
        <div className={`${classMenu} ${Styles.container_inner}`}>
          {dropDownObject &&
            dropDownObject.map((listItem, key) => (
              <DropdownList title="Sweets" item="Candy" key={key} />
            ))}
        </div>
      </div>
    </div>
  );
}
