import Styles from "./ContactForm.module.css";
import Image from "next/image";

export default function ContactForm({ message }) {
  return (
    <div className={Styles.contact_form}>
      <div className={Styles.message}>
        <Image src="/reply-icon.svg" width={32} height={32} />
        <span>{message}</span>
      </div>
      <div className={Styles.wrapper_inputs}>
        <input type="name" placeholder="Full name" />
        <input type="email" placeholder="E-mail" />
        <textarea type="text" placeholder="Message" />
        <input type="submit" value="Send message" />
      </div>
    </div>
  );
}
