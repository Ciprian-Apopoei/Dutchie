import Styles from "./TabButton.module.css";

export default function TabButton({ text, handleClick, isActive }) {
  return (
    <button
      className={`${Styles.tabButton} ${
        isActive === true ? Styles.isActive : ""
      }`}
      onClick={() => handleClick(text)}
    >
      {text}
    </button>
  );
}
