import Styles from "./BannerSmall.module.css";
import Image from "next/image";
import Button from "../button";
import Link from "next/link";

export default function BannerSmall() {
  return (
    <section className={Styles.banner_small}>
      <div className="container">
        <div className={Styles.banner_inner}>
          <Link href="/product-listing">
            <Button
              className="btnLink_small btnTransparent text_grey"
              text="Continue shopping"
              imgsrc="/arrow-goto.svg"
              imgposition="left"
            />
          </Link>
          <Image src="./bg-icon-2.svg" width={139} height={139} />
        </div>
      </div>
    </section>
  );
}
