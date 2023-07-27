import Email from "../email";
import Message from "../message";
import TopHeaderBtn from "../top-header-btn/TopHeaderBtn";
import Styles from "./PreHeader.module.css";

export default function PreHeader() {
  return (
    <div className={Styles.wrapper_preheader}>
      <div className="container">
        <div className={Styles.container_inner}>
          <Email email="info@dutchie.nl" />
          <Message discount="40% off dutch sweets" period="only today!" />
          <div className={Styles.wrapper_btns}>
            <TopHeaderBtn text="CONTACT" />
            <TopHeaderBtn text="FAQ" />
          </div>
        </div>
      </div>
    </div>
  );
}
