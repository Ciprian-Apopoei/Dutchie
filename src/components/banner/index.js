import Styles from "./Banner.module.css";
import Image from "next/image";
import BannerText from "./banner-text";

export default function Banner() {
  return (
    <section className={Styles.banner}>
      <div className="container">
        <div className={Styles.banner_inner}>
          <BannerText />
          <Image src="./bg-icon-2.svg" width={187} height={187} />
        </div>
      </div>
    </section>
  );
}
