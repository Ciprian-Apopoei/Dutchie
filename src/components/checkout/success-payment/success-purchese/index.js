import Styles from "./SuccessPurchese.module.css";
import Title from "@/components/title";
import Image from "next/image";
import Link from "next/link";

export default function SuccessPurchese() {
  return (
    <div className={Styles.success_form}>
      <Title level="h5">Fill it in and you're good to go!</Title>
      <div className={Styles.wrapper_success_form}>
        <div className={Styles.message}>
          <Image src="../succes-check.svg" width={24} height={24} alt="icon" />
          <p>Payment was succesfull</p>
        </div>
        <div className={Styles.wrapper_content}>
          <Image
            className={Styles.top_img}
            src="../confetti.svg"
            width={108}
            height={108}
            alt="img"
          />
          <Title level="h2">Thank you for your purchase!</Title>
          <Title level="h3">
            All of your lekker items should be with you before 1st of July 2020.
            🚚
          </Title>
          <button type="button" className={Styles.download_btn}>
            <Image src="../receipt.svg" width={16} height={16} alt="icon" />
            Download or print your bon
          </button>
          <Link className={Styles.back_home} href="/">
            Go back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
