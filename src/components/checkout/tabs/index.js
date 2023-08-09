import React, { useState } from "react";
import Styles from "./Tabs.module.css";
import TitleLogo from "../title_logo";
import SignUPLink from "../sign-up-link";
import FormStack from "../form-stack";
import IconTitle from "../icon-title";
import FormPersonalDetails from "../form-personal-details";

export default function Tabs() {
  const [activeIndex, setActiveIndex] = useState(2);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  return (
    <div className="checkout_tabs">
      <div className="tabs">
        <button
          className={`tab ${checkActive(1, "active")}`}
          onClick={() => handleClick(1)}
        >
          Checkout as guest
        </button>
        <button
          className={`tab ${checkActive(2, "active")}`}
          onClick={() => handleClick(2)}
        >
          Sign into your account
        </button>
      </div>

      <div className="panels">
        <div className={`panel ${checkActive(1, "active")}`}>
          <div className={Styles.wrapper_panel_1}>
            <IconTitle imgsrc="./../user.svg" title="Personal details" />
            <FormPersonalDetails />
          </div>
        </div>
        <div className={`panel ${checkActive(2, "active")}`}>
          <div className={Styles.wrapper_panel_2}>
            <TitleLogo title="members" />
            <SignUPLink text="Not a member? Don't hesitate to" />
            <FormStack />
          </div>
        </div>
      </div>
    </div>
  );
}
