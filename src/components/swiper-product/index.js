import ProductCard from "../product-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import Styles from "./SwiperProduct.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "swiper/css/effect-fade";

export default function SwiperProduct({ cards }) {
  return (
    <div className="home_slider">
      <Swiper
        modules={[Navigation, EffectFade]}
        spaceBetween={33}
        slidesPerView={4}
        navigation
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <ProductCard
              id={card.id}
              img={card.img}
              title={card.name}
              originalPrice={card.price}
              currPrice={card.price}
              discount={card.discount}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
