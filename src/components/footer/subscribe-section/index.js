import SubscribeEmail from "../subscribe-email";
import Styles from "./SubscribeSection.module.css";

export default function SubscribeSection({ title, text }) {
  return (
    <div className={Styles.contact_box}>
      <h3>{title}</h3>
      <p>{text}</p>
      <SubscribeEmail />
    </div>
  );
}
