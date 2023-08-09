import Styles from "./TitleLogo.module.css";
import Logo from "@/components/header/logo";
import Title from "@/components/title";

export default function TitleLogo({ title }) {
  return (
    <div className={Styles.wrapper_title_logo}>
      <Logo logo="./../logo.svg" />
      <span className={Styles.divider}></span>
      <Title level="h5">{title}</Title>
    </div>
  );
}
