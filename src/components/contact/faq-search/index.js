import Styles from "./FaqSearch.module.css";
import Image from "next/image";
import Title from "@/components/title";
import ButtonContact from "../button-contact";

export default function FaqSearch() {
  return (
    <div className={Styles.faq_search}>
      <Image src="/icon.svg" width={64} height={64} alt="icon" />
      <Title level="h5">Get all the answers right away. </Title>
      <p className={Styles.subtitle}>
        Ask a question and get all of your answers right away.
      </p>
      <div className={Styles.search}>
        <Image
          className={Styles.search_icon}
          src="./search.svg"
          width={16}
          height={16}
        />
        <input type="text" placeholder="e.g. When will my order arrive?" />
        <Image
          className={Styles.mic_icon}
          src="./mic.svg"
          width={20}
          height={20}
        />
      </div>
      <p className={Styles.bottom_message}>
        Didn't find your answer? Give it a call or message.
      </p>
      <div className={Styles.wrapper_btns}>
        <ButtonContact href="callto: +1 202-555-0173" text="+1 202-555-0173" />
        <ButtonContact
          href="mailto:lekker@dutchie.com"
          text="lekker@dutchie.com"
        />
      </div>
    </div>
  );
}
