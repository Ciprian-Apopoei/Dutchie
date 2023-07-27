import Styles from "./SocialSection.module.css";
import SocialIcons from "../social-icons";

export default function SocialSection({ title, text }) {
  return (
    <div className={Styles.social_box}>
      <h3>{title}</h3>
      <p>{text}</p>
      <SocialIcons />
    </div>
  );
}
