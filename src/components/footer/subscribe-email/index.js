import Styles from "./SubscribeEmail.module.css";

export default function SubscribeEmail() {
  return (
    <form className={Styles.form_search}>
      <input className={Styles.button} type="submit" value="" />
      <input
        className={Styles.search}
        type="email"
        placeholder="Enter your e-mail address"
      />
    </form>
  );
}
