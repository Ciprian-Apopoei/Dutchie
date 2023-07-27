import Styles from "./SignInForm.module.css";
import Title from "@/components/title";
import Stepper from "@/components/stepper";
import Tabs from "../tabs";

export default function SignInForm() {
  return (
    <div className={Styles.sign_in_form}>
      <Title level="h5">Fill it in and you're good to go!</Title>
      <div className={Styles.wrapper_sign_in}>
        <Stepper />
        <div className={Styles.wrapper_tabs}>
          <Tabs />
        </div>
      </div>
    </div>
  );
}
