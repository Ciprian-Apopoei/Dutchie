import Styles from "./IconTitle.module.css";
import Image from "next/image";
import Title from "@/components/title";

export default function IconTitle({ imgsrc, title }) {
  return (
    <div className={Styles.icon_title}>
      <Image src={imgsrc} width={20} height={20} alt="icon" />
      <Title level="h3">{title}</Title>
    </div>
  );
}
