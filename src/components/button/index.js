import Styles from "./Button.module.css";

export default function Button({
  className = "",
  text,
  iconLeft,
  iconRight,
  imgsrc,
  imgposition,
}) {
  return (
    <button className={className}>
      {imgposition === "left" && (
        <img src={imgsrc} className={Styles.iconLeft} alt="icon" />
      )}
      {text}
      {imgposition === "right" && (
        <img src={imgsrc} className={Styles.iconRight} alt="icon" />
      )}
    </button>
  );
}
