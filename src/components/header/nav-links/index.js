import Dropdown from "../dropdown";
import NavLink from "../nav-link";
import Styles from "./NavLinks.module.css";
import { useState } from "react";

export default function NavLinks() {
  const [activeDropdown, setActiveDropdown] = useState("");

  function toggleDropdown(openDropdown) {
    let option =
      activeDropdown === openDropdown
        ? setActiveDropdown("")
        : setActiveDropdown(openDropdown);
  }

  const obj1 = {
    title: "Shop",
    content: ["Placeholder", "Placeholder", "Placeholder"],
  };
  const dropDownObjectEx = [obj1, obj1, obj1, obj1];

  const obj2 = {
    title: "Something",
    content: ["Candy", "Candy", "Candy"],
  };
  const dropDownObjectEx2 = [obj2, obj2, obj2, obj2];

  return (
    <>
      <div className={Styles.wrapper_navlink}>
        <NavLink
          style={`${Styles.navLink} ${Styles.children}`}
          text="Foods"
          handleClick={toggleDropdown}
        />
        <NavLink
          style={`${Styles.navLink} ${Styles.children}`}
          text="Products"
          handleClick={toggleDropdown}
        />
        <NavLink style={Styles.navLink} text="Deals" isLink={true} />
      </div>
      <Dropdown
        dropDownObject={dropDownObjectEx}
        show={activeDropdown === "Foods"}
      />
      <Dropdown
        dropDownObject={dropDownObjectEx2}
        show={activeDropdown === "Products"}
      />
    </>
  );
}
