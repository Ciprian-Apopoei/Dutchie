import SingleIcon from "../single-icon";
import Styles from "./SocialIcons.module.css";
export default function SocialIcons() {
  return (
    <div className={Styles.wrapper_icons}>
      <SingleIcon address="./instagram.svg" />
      <SingleIcon address="./mail.svg" />
      <SingleIcon address="./mail.svg" />
      <SingleIcon address="./mail.svg" />
      <SingleIcon address="./mail.svg" />
    </div>
  );
}
