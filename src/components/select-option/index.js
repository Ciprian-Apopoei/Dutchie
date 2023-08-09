import Styles from "./SelectOption.module.css";
import Title from "../title";

export default function SelectOption({ title, description, active }) {
  return (
    <div
      className={
        active === "active"
          ? `${Styles.select_option} ${Styles.select_active}`
          : `${Styles.select_option}`
      }
    >
      <div className={Styles.select_text}>
        <Title level="h6">{title}</Title>
        <p>{description}</p>
      </div>
      <input type="radio" />
    </div>
  );
}
