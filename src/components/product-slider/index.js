import Styles from "./ProductSlider.module.css";
import Title from "../title";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import TabsComponent from "./tabs-component/index.";

export default function ProductSlider() {
  return (
    <section className={Styles.product_slider}>
      <div className="container">
        <Title level="h5">Explore the items you'll love</Title>
        <TabsComponent />
      </div>
    </section>
  );
}
