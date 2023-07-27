import data from "../products.json";
import SwiperProduct from "@/components/swiper-product";
import TabButton from "@/components/tab-button";
import Styles from "./TabsComponent.module.css";
import { useState } from "react";

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState(data.productTabs[0].name);

  function displaySwiper(showSwiper) {
    setActiveTab(showSwiper);
  }

  return (
    <div className={Styles.tabsComponent}>
      <div className={Styles.tab}>
        {data.productTabs.map((item, index) => (
          <TabButton
            key={index}
            isActive={activeTab === item.name}
            text={item.name}
            handleClick={displaySwiper}
          />
        ))}
      </div>

      {data.productTabs.map(
        (item, index) =>
          activeTab === item.name && (
            <SwiperProduct key={index} cards={item.items} />
          )
      )}
    </div>
  );
}
