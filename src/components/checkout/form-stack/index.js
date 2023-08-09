import Styles from "./FormStack.module.css";
import SocialLogin from "../social-login";

export default function FormStack() {
  return (
    <div className={Styles.wrapper_form_stack}>
      <input type="email" placeholder="E-mail" />
      <input type="password" placeholder="Password" />
      <div className={Styles.radio_input}>
        <input type="radio" checked />
        <label>Remember me for next sessionn</label>
      </div>
      <input type="submit" value="Sign In" />
      <span className={Styles.divider}></span>
      <SocialLogin
        href="#"
        imgsrc="/facebook.svg"
        text="Sign in with Facebook"
      />
      <SocialLogin href="#" imgsrc="/google.svg" text="Sign in with Google" />
    </div>
  );
}
