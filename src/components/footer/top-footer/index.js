import LinksList from "../links-list/Index";
import Styles from "./TopFooter.module.css";
import SubscribeSection from "../subscribe-section";
import SocialSection from "../social-section";

export default function TopFooter() {
  return (
    <div div className={Styles.top_footer}>
      <div className="container">
        <div className={Styles.wrapper_list_box}>
          <LinksList title="Shop" category="By Category" item="Placeholder" />
          <LinksList title="Foods" item="Placeholder" />
          <LinksList title="Products" item="Placeholder" />
          <LinksList title="Company" item="Placeholder" />
          <LinksList title="Contact" item="Placeholder" />
        </div>
        <div className={Styles.wrapper_social}>
          <SubscribeSection
            title="Subscribe"
            text="Don't miss out on any Dutchie news!"
          />
          <SocialSection
            title="Follow Dutchie"
            text="Eget at ac dapibus felis dolor amet."
          />
        </div>
      </div>
    </div>
  );
}
