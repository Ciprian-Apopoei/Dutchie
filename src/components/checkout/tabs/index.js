import React, { useState } from "react";
import Styles from "./Tabs.module.css";

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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat
            ligula, feugiat at felis vitae, porttitor lacinia quam.
          </p>
        </div>
        <div className={`panel ${checkActive(2, "active")}`}>
          <p>
            Nulla lobortis quis massa quis lobortis. Nullam porta semper lorem,
            vel efficitur augue rutrum quis. Suspendisse potenti.
          </p>
        </div>
      </div>
    </div>
  );
}
