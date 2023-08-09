import Styles from "./ProductDisplay.module.css";
import ProductCard from "@/components/product-card";
import data from "../products.json";

export default function ProductDisplay(props) {
  const cards = data.productTabs[0].items;
  const { id, img, discount, title, originalPrice, currPrice } = props;

  return (
    <div className={Styles.product_display}>
      {cards.map((card, id) => (
        <div key={id}>
          <ProductCard
            id={card.id}
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
}
