import Styles from "./ProductDescription.module.css";
import Title from "@/components/title";

export default function ProductDescription() {
  return (
    <div className={Styles.product_description}>
      <Title level="h5">Description</Title>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pretium
        lectus dignissim id nulla nisl at pellentesque:
      </p>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      </ul>
    </div>
  );
}
