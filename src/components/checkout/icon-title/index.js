import Styles from "./IconTitle.module.css";
import Image from "next/image";
import Title from "@/components/title";

export default function IconTitle({ imgsrc, title }) {
  const IconSize = 20;
  return (
    <div className={Styles.icon_title}>
      <Image src={imgsrc} width={IconSize} height={IconSize} alt="icon" />
      <Title level="h3">{title}</Title>
    </div>
  );
}
