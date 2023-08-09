import Styles from "./SignUPLink.module.css";
import Title from "@/components/title";
import Button from "@/components/button";

export default function SignUPLink({ text }) {
  return (
    <div className={Styles.wrapper_sign_up_link}>
      <Title level="h5">{text}</Title>
      <Button
        className="btnLink text_black"
        text="sign up"
        imgsrc="/arrow-r-b.svg"
        imgposition="right"
      />
    </div>
  );
}
