import Styles from "./ProductDisplay.module.css";
import ProductCard from "@/components/product-card";
import data from "../products.json";

export default function ProductDisplay() {
  const cards = data.productTabs[0].items;

  return (
    <div className={Styles.product_display}>
      {cards.map((card, index) => (
        <div key={index}>
          <ProductCard
            img={card.img}
            title={card.name}
            originalPrice={card.price}
            currPrice={card.price}
            discount={card.discount}
          />
        </div>
      ))}
    </div>
  );

  // return (
  //   <div className={Styles.product_display}>
  //     <ProductCard
  //       img="/image.svg"
  //       title="Berberana Red Dragon Tempranillo"
  //       originalPrice="12.90"
  //       currPrice="8.90"
  //       discount="30%"
  //     />
  //     <ProductCard
  //       img="/image.svg"
  //       title="Berberana Red Dragon Tempranillo"
  //       originalPrice="12.90"
  //       currPrice="8.90"
  //       discount="30%"
  //     />
  //     <ProductCard
  //       img="/image.svg"
  //       title="Berberana Red Dragon Tempranillo"
  //       originalPrice="12.90"
  //       currPrice="8.90"
  //       discount="30%"
  //     />
  //     <ProductCard
  //       img="/image.svg"
  //       title="Berberana Red Dragon Tempranillo"
  //       originalPrice="12.90"
  //       currPrice="8.90"
  //       discount="30%"
  //     />
  //     <ProductCard
  //       img="/image.svg"
  //       title="Berberana Red Dragon Tempranillo"
  //       originalPrice="12.90"
  //       currPrice="8.90"
  //       discount="30%"
  //     />
  //     <ProductCard
  //       img="/image.svg"
  //       title="Berberana Red Dragon Tempranillo"
  //       originalPrice="12.90"
  //       currPrice="8.90"
  //       discount="30%"
  //     />
  //     <ProductCard
  //       img="/image.svg"
  //       title="Berberana Red Dragon Tempranillo"
  //       originalPrice="12.90"
  //       currPrice="8.90"
  //       discount="30%"
  //     />
  //     <ProductCard
  //       img="/image.svg"
  //       title="Berberana Red Dragon Tempranillo"
  //       originalPrice="12.90"
  //       currPrice="8.90"
  //       discount="30%"
  //     />
  //     <ProductCard
  //       img="/image.svg"
  //       title="Berberana Red Dragon Tempranillo"
  //       originalPrice="12.90"
  //       currPrice="8.90"
  //       discount="30%"
  //     />
  //     <ProductCard
  //       img="/image.svg"
  //       title="Berberana Red Dragon Tempranillo"
  //       originalPrice="12.90"
  //       currPrice="8.90"
  //       discount="30%"
  //     />
  //     <ProductCard
  //       img="/image.svg"
  //       title="Berberana Red Dragon Tempranillo"
  //       originalPrice="12.90"
  //       currPrice="8.90"
  //       discount="30%"
  //     />
  //     <ProductCard
  //       img="/image.svg"
  //       title="Berberana Red Dragon Tempranillo"
  //       originalPrice="12.90"
  //       currPrice="8.90"
  //       discount="30%"
  //     />
  //   </div>
  // );
}
