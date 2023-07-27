import Styles from "./ProductDetailsWrapper.module.css";
import ProductDescription from "../product-description";
import ProductCharacteristics from "../product-characteristics";
import ProductImages from "../product-images";
import BuyInformations from "../buy-informations";
import OthersBought from "../others-bought";

export default function ProductDetailsWrapper() {
  return (
    <div className={Styles.product_details_wrapper}>
      <div className="container">
        <div className={Styles.container_inner}>
          <div className={Styles.left_side}>
            <ProductImages />
            <ProductDescription />
            <ProductCharacteristics />
          </div>
          <div className={Styles.right_side}>
            <BuyInformations />
            <OthersBought />
          </div>
        </div>
      </div>
    </div>
  );
}
