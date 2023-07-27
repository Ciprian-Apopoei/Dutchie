import Title from "@/components/title";
import Styles from "./BannerText.module.css";

export default function BannerText() {
  return (
    <div className={Styles.wrapper_banner_text}>
      <p className={Styles.category_name}>Party Items</p>
      <Title level="h5">
        A party without these items is simply not a party.
      </Title>
    </div>
  );
}
