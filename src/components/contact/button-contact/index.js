import Styles from "./ButtonContact.module.css";

export default function ButtonContact({ href, text }) {
  return (
    <button className={Styles.button_contact} type="button" href={href}>
      {text}
    </button>
  );
}
