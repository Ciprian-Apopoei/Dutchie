import Logo from "@/components/header/logo";
import Copyright from "../copyright";
import Style from "./BottomFooter.module.css";

export default function BottomFooter() {
  return (
    <div className={Style.bottom_footer}>
      <div className="container">
        <Logo logo="./../logo-footer.svg" />
        <Copyright />
      </div>
    </div>
  );
}
