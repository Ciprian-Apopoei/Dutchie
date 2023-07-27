import Styles from "./message.module.css";

export default function Message({ discount, period }) {
  return (
    <p className={Styles.message}>
      <strong>{discount}</strong> {period}
    </p>
  );
}
