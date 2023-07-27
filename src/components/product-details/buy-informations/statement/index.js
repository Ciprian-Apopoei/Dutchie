import Styles from "./Statement.module.css";

export default function Statement({ text, price }) {
  return (
    <div className={Styles.statement}>
      <p>
        {text} <span>{price}</span>
      </p>
    </div>
  );
}
