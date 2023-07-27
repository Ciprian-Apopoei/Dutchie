import Styles from "./ProductImages.module.css";
import SwiperSection from "./swiper-section";

export default function ProductImages() {
  return (
    <div className={Styles.product_images}>
      <SwiperSection />
    </div>
  );
}
